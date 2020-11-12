import {ADD_USER} from './userTypes'


const initialState = [];


const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER:
            return[
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}


export default UserReducer;