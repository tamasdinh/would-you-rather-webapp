import { getInitialData, saveAnswer, saveQuestion } from '../utils/apiCalls'
import { getUsers, answerUser, addQuestionUser } from './users'
import { getQuestions, answerQuestion, addQuestionQuestion } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'
// TODO: implement proper authentication

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({users, questions}) => {
      dispatch(getUsers(users))
      dispatch(getQuestions(questions))
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveAnswer({
      authedUser,
      qid,
      answer
    })
    .then(() => {
      dispatch(answerUser(authedUser, qid, answer))
      dispatch(answerQuestion(authedUser, qid, answer))
    })
    .catch(e => {
      console.warn('Error w/ saving answer to question!', e)
      alert('Unfortunately there was an error while saving your answer to the question. Please try again later.')
    })
  }
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveQuestion(
      authedUser,
      optionOne,
      optionTwo
    )
    .then((formattedQuestion) => {
      const { id } = formattedQuestion
      dispatch(addQuestionUser(authedUser, id))
      dispatch(addQuestionQuestion(formattedQuestion))
    })
    .catch(e => {
      console.warn('Error when trying to save question', e)
      alert('Unfortunately there was an error while saving your question. Please try again.')
    })
  }
}