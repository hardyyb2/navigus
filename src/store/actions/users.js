import { db } from '../../firebase/firebase'

export const SET_TOTAL_CLIENTS = 'SET_TOTAL_CLIENTS'
export const SET_USER_DETAILS = 'SET_USER_DETAILS'
export const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
export const SET_OFFLINE_USERS = 'SET_OFFLINE_USERS'

const setClients = clients => {
    return {
        type: SET_TOTAL_CLIENTS,
        clients
    }
}

const setTotalUsers = users => {
    return {
        type: SET_TOTAL_USERS,
        users
    }
}

const setOfflineUsers = () => {
    return {
        type: SET_OFFLINE_USERS
    }
}


export const setTotalClients = clients => dispatch => {
    dispatch(setClients(clients))
    dispatch(setOfflineUsers())
}

export const getTotalUsers = () => dispatch => {
    let totalUsers = []
    console.log('running')

    db
        .collection('users')
        .get()
        .then(snapshot => {
            console.log(snapshot)
            snapshot.docs.map(doc => {
                totalUsers.push(doc.data().email)
            })
            console.log(totalUsers)
            dispatch(setTotalUsers(totalUsers))
            dispatch(setOfflineUsers())
        })
        .catch(err => console.log(err))

}

