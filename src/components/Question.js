import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {

  state = {
    activeSelection: '1'
  }

  handleRadioButtonChange = (event) => {
    this.setState({
      activeSelection: event.target.value
    })
  }

  submitAnswer = (event) => {
    event.preventDefault()
    // TODO: add proper submission of answer
  }

  render() {
    const { id, author, timestamp, optionOne, optionTwo } = this.props.question
    const { users, submit } = this.props
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
            {!submit && 
              <p className='question-fragment'>...{optionOne.text}...</p>
            }
            {!submit &&
              <Link to={`/questions/${id}`}>
                <button className='btn'>View Poll</button>
              </Link>
            }
            {submit &&
              <Fragment>
                <label className='radio-button-row'>
                  <input  name='radio-answer-1'
                          value='1'
                          type='radio'
                          checked={this.state.activeSelection === '1'}
                          onChange={this.handleRadioButtonChange} />
                {optionOne.text}
                </label>
                <label className='radio-button-row'>
                  <input  name='radio-answer-2'
                          value='2'
                          type='radio'
                          checked={this.state.activeSelection === '2'}
                          onChange={this.handleRadioButtonChange}/>
                {optionTwo.text}
                </label>
                <Link to={`/questions/${id}/results`}>
                  <button
                    className='btn'
                    onClick={this.submitAnswer}>
                    Submit
                  </button>
                </Link>
              </Fragment>
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id, submit }) {
  const question = questions[id]

  return {
    authedUser,
    question: question ? question : null,
    users
  }
}

export default withRouter(connect(mapStateToProps)(Question))