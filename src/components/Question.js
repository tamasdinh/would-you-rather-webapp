import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { id, author, timestamp, optionOne, optionTwo } = this.props.question
    const { users } = this.props
    return (
      <div className='question'>
        <div className='question-header'>{users[author].name} asks:</div>
        <div className='question-info'>
          <img
            className='avatar'
            src={users[author].avatarURL}
          />
          <div className='divider-line'></div>
          <div>
            <span>Would you rather</span>
            <p className='question-fragment'>...{optionOne.text}...</p>
            <button className='btn'>View Poll</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question: question ? question : null,
    users
  }
}

export default connect(mapStateToProps)(Question)