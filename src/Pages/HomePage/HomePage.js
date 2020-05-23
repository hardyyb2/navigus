import React, { useEffect, useState } from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core'
import socketIOClient from 'socket.io-client'
import { connect } from 'react-redux'

import Logout from '../../components/Logout/Logout'
import CardsComponent from '../../components/CardsComponent/CardsComponent'

import { setTotalClients, getTotalUsers } from '../../store/actions'
import MiniDrawer from '../../UI/MiniDrawer/MiniDrawer'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '40px',
        marginRight: '20px',
        padding: '20px',
        background: '#1f1f2f'
    },
    title: {
        color: '#f5f5f5',
        fontSize: '2.5rem',
        marginBottom: '30px',
        display: 'block'
    }
}))

const HomePage = ({ userEmail, totalClients, totalUsers, offlineUsers, setTotalClients, getTotalUsers }) => {
    const endpoint = 'http://localhost:4001'
    const color = 'white'

    const classes = useStyles()

    const [logout, setLogout] = useState(false)
    const [onlineUsers, setOnlineUsers] = useState([])

    useEffect(() => {

        //set total users
        getTotalUsers()
        //set online users
        const socket = socketIOClient(endpoint);
        let clientData = {
            email: userEmail
        }
        socket.on('connect', () => {
            socket.email = userEmail
            socket.emit('client data', clientData)
        })
        socket.on('total online', (allUsersEmail) => {
            setTotalClients(JSON.parse(allUsersEmail))
            getTotalUsers()
        })
        socket.on('multipletabs', () => {
            console.log('multiple tabs open')
        })

    }, [])


    const toggleHandleLogout = () => {
        setLogout(!logout)
    }
    return (
        <MiniDrawer>
            <div className={classes.root}>
                <span className={classes.title}>Online Users</span>
                <CardsComponent totalUsers={totalClients} type="online" />
                <CardsComponent totalUsers={totalUsers} type="mixed" />
                <CardsComponent totalUsers={offlineUsers} type="offline" />
                <Button onClick={toggleHandleLogout} color="primary"
                >Logout</Button>
                {
                    logout ?
                        <Logout handleClose={toggleHandleLogout} />
                        :
                        null
                }
            </div>
        </MiniDrawer>
    )
}

const mapStateToProps = state => {
    return {
        userEmail: state.auth.user.email,
        totalClients: state.users.totalClients,
        totalUsers: state.users.totalUsers,
        offlineUsers: state.users.offlineUsers
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setTotalClients: (totalClients) => dispatch(setTotalClients(totalClients)),
        getTotalUsers: () => dispatch(getTotalUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)