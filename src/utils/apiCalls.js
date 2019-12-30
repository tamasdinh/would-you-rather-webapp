import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
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

export function saveQuestion(author, optionOneText, optionTwoText) {
  return _saveQuestion({author, optionOneText, optionTwoText})
    .then(formattedQuestion => formattedQuestion)
}