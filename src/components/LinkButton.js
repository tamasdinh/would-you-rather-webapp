import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class QuestionButton extends Component {
  render() {
    if (this.props.answered === true) {
      return (
        <Link to={`/questions/${this.props.id}/results`}>
          <button className='btn'>View Poll</button>
        </Link>
      )
    } else {
      return (
        <Link to={`/questions/${this.props.id}`}>
          <button className='btn'>View Poll</button>
        </Link>
      )
    }
  }
}

export default QuestionButton