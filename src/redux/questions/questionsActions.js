import {FETCH_QUESTIONS} from './questionTypes'


export const fetchQuestions_action = () => {
    return{
        type: FETCH_QUESTIONS
    }
}