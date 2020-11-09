import { SIGN_IN, SIGN_IN_ERR, SIGN_OUT, SIGN_UP, SIGN_UP_ERR } from "../actions/authActions";

const initilState = {
    users: []
}

export const authReducer = (state = initilState, action) => {
    switch (action.type) {
        case SIGN_IN:
            console.log('sign in')
            return state
        case SIGN_IN_ERR:
            console.log('err sign in')
            return state
        case SIGN_OUT:
            console.log('sign out')
            return state
        case SIGN_UP:
            console.log('sign up')
            return state
        case SIGN_UP_ERR:
            return state
        default:
            return state
    }
}