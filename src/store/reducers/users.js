import {
    SET_TOTAL_CLIENTS
} from "../actions/index"

const initialState = {
    totalClients: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_CLIENTS:
            return {
                ...state,
                totalClients: action.clients
            }

        default:
            return state
    }

}