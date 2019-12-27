import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
  render() {
    const { id } = this.props
    console.log('Id from QPage', id)
    return (
      <div>
        <Question id={id} />
      </div>
    )
  }
}

function mapStateToProps({ authedUser }, props) {
  const { id } = props.match.params

  return {
    authedUser,
    id
  }
}

export default connect(mapStateToProps)(QuestionPage)