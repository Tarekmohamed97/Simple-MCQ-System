import {ADD_USER} from './userTypes'

export const addUser_action = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

