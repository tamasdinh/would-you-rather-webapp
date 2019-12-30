import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import loginGuard from './loginGuard'

class QuestionSubmit extends Component {
    
  componentDidMount() {
    loginGuard(this, true)
  }
  
  componentDidUpdate() {
    loginGuard(this, false)
  }

  render() {
    const { id, doesExist } = this.props
    if (!doesExist) {
      return (
        <Fragment>
          <h3>HTTP 404 Error</h3>
          <p>The requested resource was not found in the database.</p>
        </Fragment>
      )
    }
    return (
      <div>
        <Question id={id} dashboard={false} answered={false}/>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }, props) {
  const { id } = props.match.params
  const doesExist = questions[id] ? true : false

  return {
    authedUser,
    id,
    doesExist
  }
}

export default connect(mapStateToProps)(QuestionSubmit)