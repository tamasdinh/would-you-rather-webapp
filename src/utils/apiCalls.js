import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer
} from './_DATA'

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  }))
}

export function saveAnswer({authedUser, qid, answer}) {
  return _saveQuestionAnswer({authedUser, qid, answer})
    .then(() => ({
      authedUser,
      qid,
      answer
    }))
}