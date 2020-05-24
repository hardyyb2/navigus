import React, { useEffect, useState } from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core'
import socketIOClient from 'socket.io-client'
import { connect } from 'react-redux'

import Logout from '../../components/Logout/Logout'
import CardsComponent from '../../components/CardsComponent/CardsComponent'

import { setTotalClients, getTotalUsers } from '../../store/actions'
import MiniDrawer from '../../UI/MiniDrawer/MiniDrawer'

const useStyles = makeStyles(theme => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255,255,255,.1)',
            outline: '1px solid slategrey'
        }
    },
    root: {
        marginTop: '40px',
        marginRight: '20px',
        padding: '20px',
        maxWidth: '80vw',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    card: {
        borderRadius: '2px',
        margin: '1rem',
        marginBottom: '3rem',
        position: 'relative',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    },
    title: {
        color: '#f5f5f5',
        fontSize: '2.5rem',
        marginBottom: '30px',
        display: 'block',
        background: '#1f1f2f',
        padding: '12px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    },
    cardsComponent: {
        maxWidth: '100%',
        padding: '20px',
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
            if (totalClients !== allUsersEmail)
                getTotalUsers()
        })
        socket.on('multipletabs', () => {
            console.log('multiple tabs open')
        })


    }, [])


    const toggleHandleLogout = () => {
        setLogout(!logout)
    }

    const cardData = [
        { title: 'Online Users', totalUsers: totalClients, type: 'online' },
        { title: 'Total Users', totalUsers: totalUsers, type: 'mixed' },
        { title: 'Offline Users', totalUsers: offlineUsers, type: 'offline' },
    ]

    return (
        <MiniDrawer>
            <div className={classes.root}>
                {
                    cardData.map((data, index) =>
                        <div className={classes.card} key={index}>
                            <span className={classes.title}>{data.title}</span>
                            <div className={classes.cardsComponent}>
                                <CardsComponent totalUsers={data.totalUsers} type={data.type} />
                            </div>
                        </div>
                    )
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