import React, { useEffect, useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import socketIOClient from 'socket.io-client'
import { connect } from 'react-redux'

import Logout from '../../components/Logout/Logout'
import OnlineComponent from '../../components/OnlineComponent/OnlineComponent'

import { setTotalClients } from '../../store/actions'

const HomePage = ({ userEmail, totalClients, setTotalClients }) => {
    const endpoint = 'http://localhost:4001'
    const color = 'white'
    const [logout, setLogout] = useState(false)
    const [onlineUsers, setOnlineUsers] = useState([])

    useEffect(() => {
        const socket = socketIOClient(endpoint);
        let clientData = {
            email: userEmail
        }
        socket.on('connect', () => {
            socket.emit('client data', clientData)
        })
        socket.on('total online', (allUsersEmail) => {
            setTotalClients(JSON.parse(allUsersEmail))
        })
        socket.on('multipletabs', () => {
            console.log('multiple tabs open')
        })
    }, [])


    const toggleHandleLogout = () => {
        setLogout(!logout)
    }
    return (
        <div>
            <span>Home</span>
            <OnlineComponent onlineUsers={onlineUsers} />
            <Button onClick={toggleHandleLogout} color="primary"
            >Logout</Button>
            {
                logout ?
                    <Logout handleClose={toggleHandleLogout} />
                    :
                    null
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userEmail: state.auth.user.email,
        totalClients: state.users.totalClients
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setTotalClients: (totalClients) => dispatch(setTotalClients(totalClients))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)