import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import LinkButton from './LinkButton'
import { handleAnswerQuestion } from '../actions/shared'

class Question extends Component {

  state = {
    activeSelection: 'optionOne'
  }

  handleRadioButtonChange = (event) => {
    this.setState({
      activeSelection: event.target.value
    })
  }

  submitAnswer = () => {
    this.props.dispatch(handleAnswerQuestion(this.props.question.id, this.state.activeSelection))
  }

  render() {
    const { id, author, optionOne, optionTwo } = this.props.question
    const { users, dashboard, answered } = this.props
    return (
      <div className='question'>
        <div className='question-header'>{users[author].name} asks:</div>
        <div className='question-info'>
          <img
            className='avatar'
            src={users[author].avatarURL}
            alt=''
          />
          <div className='divider-line'></div>
          <div>
          <span>Would you rather</span>
            {dashboard && 
              <Fragment>
                <p className='question-fragment'>...{optionOne.text}...</p>
                <LinkButton id={id} answered={answered} />
              </Fragment>
            }
            {!dashboard && !answered &&
              <Fragment>
                <label className='radio-button-row'>
                  <input  name='radio-answer-1'
                          value='optionOne'
                          type='radio'
                          checked={this.state.activeSelection === 'optionOne'}
                          onChange={this.handleRadioButtonChange} />
                {optionOne.text}
                </label>
                <label className='radio-button-row'>
                  <input  name='radio-answer-2'
                          value='optionTwo'
                          type='radio'
                          checked={this.state.activeSelection === 'optionTwo'}
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

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question: question ? question : null,
    users
  }
}

export default withRouter(connect(mapStateToProps)(Question))