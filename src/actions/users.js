export const GET_USERS = 'GET_USERS'
export const ANSWER_USER = 'ANSWER_USER'
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'

export function getUsers (users) {
  return {
    type: GET_USERS,
    users
  }
}

export function answerUser(authedUser, qid, answer) {
  return {
    type: ANSWER_USER,
    authedUser,
    qid,
    answer
  }
}

export function addQuestionUser(authedUser, id) {
  return {
    type: ADD_QUESTION_USER,
    authedUser,
    id
  }
}

