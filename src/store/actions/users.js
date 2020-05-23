import { db } from '../../firebase/firebase'

export const SET_TOTAL_CLIENTS = 'SET_TOTAL_CLIENTS'
export const SET_USER_DETAILS = 'SET_USER_DETAILS'


const setClients = clients => {
    return {
        type: SET_TOTAL_CLIENTS,
        clients
    }
}

export const setTotalClients = clients => dispatch => {
    let totalClients = clients.map(client => {
        return {
            email: client,
            name: 'p'
        }
    });
    dispatch(setClients(totalClients))
}