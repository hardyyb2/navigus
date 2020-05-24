const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')

const port = process.env.PORT || 4001

const app = express()

app.use(express.static(path.join(__dirname, 'build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'build/index.html'));
});


const server = http.createServer(app)


const io = socketIO(server)

const usersList = []

io.sockets.on('connection', socket => {
    socket.on('client data', (clientData) => {
        socket['email'] = clientData.email

        if (usersList.indexOf(clientData.email) === -1) {
            usersList.push(clientData.email)
            io.emit('total online', JSON.stringify(usersList))
        } else {
            socket.emit('multipletabs', 'opened many tabs')
            io.emit('total online', JSON.stringify(usersList))
        }
    })

    socket.on('disconnect', () => {
        var i = usersList.indexOf(socket.email);
        if (i > -1) {
            usersList.splice(i, 1);
            io.emit('total online', JSON.stringify(usersList))
        }
    })
    socket.on('logout', (clientData) => {
        var i = usersList.indexOf(clientData.email);
        if (i > -1) {
            usersList.splice(i, 1);
            io.emit('total online', JSON.stringify(usersList))
        }

    })
})

server.listen(port, () => console.log(`Listening on port ${port}`))