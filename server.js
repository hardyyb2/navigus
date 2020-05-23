const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = process.env.PORT || 4001

const app = express()

const server = http.createServer(app)

const io = socketIO(server)

const usersList = []

io.sockets.on('connection', socket => {
    socket.on('client data', (clientData) => {
        if (usersList.indexOf(clientData.email) === -1) {
            socket['email'] = clientData.email
            usersList.push(clientData.email)
            io.emit('total online', JSON.stringify(usersList))
        } else {
            socket.emit('multipletabs', 'opened many tabs')
            io.emit('total online', JSON.stringify(usersList))
        }

    })

    socket.on('disconnect', () => {
        // var online = Object.keys(io.engine.clients);
        var i = usersList.indexOf(socket.email);
        usersList.splice(i, 1);
        io.emit('total online', JSON.stringify(usersList))
        // console.log(usersList)
    })
})

server.listen(port, () => console.log(`Listening on port ${port}`))