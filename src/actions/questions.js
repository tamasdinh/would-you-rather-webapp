export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export function answerQuestion(authedUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function addQuestionQuestion(formattedQuestion) {
  return {
    type: ADD_QUESTION,
    formattedQuestion
  }
}