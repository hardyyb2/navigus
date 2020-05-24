import {
    SET_TOTAL_CLIENTS,
    SET_USER_DETAILS,
    SET_TOTAL_USERS,
    SET_OFFLINE_USERS,
    SET_CURRENTLLY_VIEWED_USER,
    CLEAR_AVATAR_DATA
} from "../actions/index"

const initialState = {
    totalClients: [],
    totalUsers: [],
    offlineUsers: [],
    currentlyViewedUser: null,
    userDetails: {
        Name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name..'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        Phone: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Phone Number..'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true,
                isNumber: true
            }
        },
        Street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Street..'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        PostalCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP..'
            },
            value: '',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 3
            }
        },

    },
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_CLIENTS:
            return {
                ...state,
                totalClients: action.clients
            }
        case SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.userDetails
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.users
            }
        case SET_OFFLINE_USERS:
            let offlineUsers = []
            offlineUsers = state.totalUsers.filter(user => state.totalClients.indexOf(user) === -1)
            return {
                ...state,
                offlineUsers: offlineUsers
            }
        case SET_CURRENTLLY_VIEWED_USER:
            return {
                ...state,
                currentlyViewedUser: action.user
            }
        case CLEAR_AVATAR_DATA:
            return {
                ...state,
                currentlyViewedUser: null
            }
        default:
            return state
    }

}