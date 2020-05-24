import { db } from '../../firebase/firebase'

export const SET_TOTAL_CLIENTS = 'SET_TOTAL_CLIENTS'
export const SET_USER_DETAILS = 'SET_USER_DETAILS'
export const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
export const SET_OFFLINE_USERS = 'SET_OFFLINE_USERS'
export const GET_AVATAR_DATA = 'GET_AVATAR_DATA'
export const SET_CURRENTLLY_VIEWED_USER = 'SET_CURRENTLLY_VIEWED_USER'
export const CLEAR_AVATAR_DATA = 'CLEAR_AVATAR_DATA'

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

const setCurrentlyVieweduser = user => {
    return {
        type: SET_CURRENTLLY_VIEWED_USER,
        user
    }
}

export const clearAvatarData = () => {
    return {
        type: CLEAR_AVATAR_DATA
    }
}

//set total online users
export const setTotalClients = clients => dispatch => {
    dispatch(setClients(clients))
    dispatch(setOfflineUsers())
}

//get total users from database 
export const getTotalUsers = () => dispatch => {
    let totalUsers = []

    db
        .collection('users')
        .get()
        .then(snapshot => {
            snapshot.docs.map(doc => {
                totalUsers.push(doc.data().email)
            })
            dispatch(setTotalUsers(totalUsers))
            dispatch(setOfflineUsers())
        })
        .catch(err => console.log(err))

}

//get avatar data on avatar click based on email
export const getAvatarData = clientEmail => dispatch => {
    db
        .collection('users')
        .where('email', '==', clientEmail)
        .get()
        .then(res => {
            dispatch(setCurrentlyVieweduser(res.docs[0].data()))
        })
        .catch(err => console.log(err))

}