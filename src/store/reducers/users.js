import {
    SET_TOTAL_CLIENTS,
    SET_USER_DETAILS
} from "../actions/index"

const initialState = {
    totalClients: [],
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

        default:
            return state
    }

}