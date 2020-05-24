

import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import socketIOClient from 'socket.io-client'

import { setTotalClients, getTotalUsers } from '../../store/actions'


import { connect } from 'react-redux'

import { logoutUser } from '../../store/actions/index'

const useStyles = makeStyles(theme => ({
    modal: {
        backgroundColor: '#121212',
        color: '#f5f5f5'
    }

}))

const Logout = props => {
    const endpoint = '/'
    const socket = socketIOClient(endpoint);
    const classes = useStyles()
    return (
        <div style={{ background: '#1f1f2f' }}>
            <Dialog
                open={true}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                classes={{ paper: classes.modal }}
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to Logout?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={() => {
                        props.logout()
                        let clientData = {
                            email: props.userEmail
                        }
                        socket.emit('logout', clientData)
                    }}
                        color="secondary"
                    >
                        Logout
            </Button>
                    <Button onClick={props.handleClose} color="primary" autoFocus>
                        Cancel
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        userEmail: state.auth.user.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logoutUser()),
        setTotalClients: (totalClients) => dispatch(setTotalClients(totalClients)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout)