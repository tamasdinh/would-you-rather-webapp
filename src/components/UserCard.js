import React, { Component } from 'react'

class UserCard extends Component {
  render() {
    const { name, avatarURL, answerScore, createdScore, totalScore } = this.props.user
    return (
      <div className='question'>
        <div className='question-info'>
          <img
            className='avatar'
            src={avatarURL}
          />
          <div className='divider-line'></div>
          <div className='card-text'>
            <span>{name}</span>
            <div className='score-text'>
              <p>Answered&nbsp;questions</p>
              <p>{answerScore}</p>
            </div>
            <div className='divider-line'></div>
            <div className='score-text'>
              <p>Created&nbsp;questions</p>
              <p>{createdScore}</p>
            </div>
          </div>
          <div className='divider-line'></div>
          <div className='total-score-box'>
            <div className='question-header'>Score</div>
            <div className='total-score'>{totalScore}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserCard