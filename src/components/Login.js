import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

  componentDidMount() {
    if (this.props.authedUser) {
      alert('You are already logged in. Redirecting you to Home...')
      this.props.history.push('/')
    }
  }

  setAuthedUser = (event) => {
    this.props.dispatch(setAuthedUser(event.currentTarget.attributes.id.value))
    this.props.history.push('/')
  }

  render() {
    let { users } = this.props
    users = Object.values(users)
    return (
      <Fragment>
        <h3 className='center'>Select user to login with</h3>
        <ul>
          {users.map(user => (
            <li
            key={user.id}
            >
                <div className='user-card' onClick={this.setAuthedUser} id={user.id}>
                  <img className='avatar' src={user.avatarURL} alt=''/>
                  <span>{user.name}</span>
                </div>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Login)