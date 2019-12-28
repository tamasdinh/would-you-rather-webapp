import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionSubmit extends Component {
  render() {
    const { id } = this.props
    return (
      <div>
        <Question id={id} dashboard={false} answered={false}/>
      </div>
    )
  }
}

function mapStateToProps({}, props) {
  const { id } = props.match.params

  return {
    id
  }
}

export default connect(mapStateToProps)(QuestionSubmit)