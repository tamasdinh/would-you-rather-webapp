import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import loginGuard from './loginGuard'

class Dashboard extends Component {

  state = {
    showAnswered: false
  }
  
  componentDidMount() {
    loginGuard(this, true)
  }
  
  componentDidUpdate() {
    loginGuard(this, false)
  }

  toggleAnswered = () => {
    this.setState({
      showAnswered: this.state.showAnswered ? false : true
    })
  }

  render() {

    let list = []

    if (this.state.showAnswered) {
      list = this.props.answered
    } else {
      list = this.props.unanswered
    }

    return (
      <Fragment>
        <div className='dashboard-selector'>
          <button
            disabled={!this.state.showAnswered}
            onClick={this.toggleAnswered}>
            Unanswered questions
          </button>
          <button
            disabled={this.state.showAnswered}
            onClick={this.toggleAnswered}>
            Answered questions
          </button>
        </div>
        <ul className='question-list'>
          {list.map(id => (
              <li key={id}>
              <Question
                id={id}
                dashboard={true}
                answered={this.state.showAnswered}
              />
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    answered: Object.values(questions)
    .filter(q => q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser))
    .map(q => q.id)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp),

    unanswered: Object.values(questions)
    .filter(q => !q.optionOne.votes.includes(authedUser) && !q.optionTwo.votes.includes(authedUser))
    .map(q => q.id)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)