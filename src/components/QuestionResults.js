import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultsBox from './ResultsBox'
import loginGuard from './loginGuard'

class QuestionResults extends Component {
    
  componentDidMount() {
    loginGuard(this, true)
  }
  
  componentDidUpdate() {
    loginGuard(this, false)
  }

  render() {
    const { authorName, avatarUrl, question, selected } = this.props
    const noVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    return (
      <div className='question'>
        <div className='question-header'>Asked by {authorName}:</div>
        <div className='question-info'>
          <img
            className='avatar'
            src={avatarUrl}
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
  const selected = question.optionOne.votes.includes(authedUser) && questions[id].optionOne ||
                    question.optionTwo.votes.includes(authedUser) && questions[id].optionTwo ||
                    ''
  const avatarUrl = users[question.author].avatarURL
  const authorName = users[question.author].name

  return {
    authedUser,
    authorName,
    avatarUrl,
    question,
    selected
  }
}

export default connect(mapStateToProps)(QuestionResults)