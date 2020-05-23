
export const SET_TOTAL_CLIENTS = 'SET_TOTAL_CLIENTS'


const setClients = clients => {
    return {
        type: SET_TOTAL_CLIENTS,
        clients
    }
}

export const setTotalClients = clients => dispatch => {
    dispatch(setClients(clients))
}