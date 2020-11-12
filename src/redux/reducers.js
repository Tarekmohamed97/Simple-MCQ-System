import {combineReducers} from 'redux';
import UserReducer from './users/userReducer';
import QuestionsReducer from './questions/questionReducer'


const rootReducer = combineReducers({
    users: UserReducer,
    questions: QuestionsReducer
})

export default rootReducer;