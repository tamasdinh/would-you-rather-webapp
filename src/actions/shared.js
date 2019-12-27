import { getInitialData } from '../utils/apiCalls'
import { getUsers } from './users'
import { getQuestions } from './questions'
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
