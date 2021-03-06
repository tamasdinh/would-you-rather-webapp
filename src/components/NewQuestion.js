import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import loginGuard from './loginGuard'

class NewQuestion extends Component {
    
  componentDidMount() {
    loginGuard(this, true)
  }
  
  componentDidUpdate() {
    loginGuard(this, false)
  }

  submitQuestion = () => {
    const optionOne = document.getElementById('optionOne').value
    const optionTwo = document.getElementById('optionTwo').value
    this.props.dispatch(handleAddQuestion(optionOne, optionTwo))
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='question'>
        <div className='new-question-header'>Create new question</div>

        <p>Complete the question:</p>
        <p><span>Would you rather...</span></p>
        <input
          id='optionOne'
          type='text'
          placeholder='Enter Option One text here'>
        </input>
        <p className='or'>OR</p>
        <input
          id='optionTwo'
          type='text'
          placeholder='Enter Option Two text here'>
        </input>
        <button
          className='btn'
          onClick={this.submitQuestion}>
          Submit
        </button>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)