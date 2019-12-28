import { GET_QUESTIONS } from '../actions/questions'
import { ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ANSWER_QUESTION:
      if (action.answer === 'optionOne') {
        return {
          ...state,
          [action.qid]: {
            ...state[action.qid],
            optionOne: {
              ...state[action.qid].optionOne,
              votes: state[action.qid].optionOne.votes.concat([action.authedUser])
            }
          }
        }
      } else if (action.answer === 'optionTwo') {
        return {
          ...state,
          [action.qid]: {
            ...state[action.qid],
            optionTwo: {
              ...state[action.qid].optionTwo,
              votes: state[action.qid].optionTwo.votes.concat([action.authedUser])
            }
          }
        }
      }
    default:
      return state
  }
}