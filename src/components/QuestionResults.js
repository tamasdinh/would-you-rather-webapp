import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ResultsBox from './ResultsBox'

class QuestionResults extends Component {
  
  componentDidUpdate() {
    if (!this.props.authedUser) {
      window.location.reload()
    }
  }

  render() {
    const { doesExist } = this.props
    if (!doesExist) {
      return (
        <Fragment>
          <h3>HTTP 404 Error</h3>
          <p>The requested resource was not found in the database.</p>
        </Fragment>
      )
    }
    const { authorName, avatarUrl, question, selected } = this.props
    const noVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    return (
      <div className='question'>
        <div className='question-header'>Asked by {authorName}:</div>
        <div className='question-info'>
          <img
            className='avatar'
            src={avatarUrl}
            alt=''
          />
          <div className='divider-line'></div>
          <div>
            <span>Results:</span>
            <ResultsBox
              selected={selected}
              noVotes={noVotes}
              option={question.optionOne}
            />
            <ResultsBox
              selected={selected}
              noVotes={noVotes}
              option={question.optionTwo}
            />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const question = questions[id]
  const doesExist = questions[id] ? true : false
  let selected
  if (question && question.optionOne.votes.includes(authedUser)) {
    selected = questions[id].optionOne
  } else if (question && question.optionTwo.votes.includes(authedUser)) {
     selected = questions[id].optionTwo
  } else {
    selected = ''
  }
  const avatarUrl = question ? users[question.author].avatarURL : null
  const authorName = question ? users[question.author].name: null

  return {
    authedUser,
    authorName,
    avatarUrl,
    question,
    selected,
    doesExist
  }
}

export default connect(mapStateToProps)(QuestionResults)