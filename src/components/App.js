import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Question from './Question'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Nav from './Nav'
import { BrowserRouter, Route } from 'react-router-dom'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <LoadingBar />
          <Nav />
          {this.props.loading === true
          ? null
          : <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/new' component={NewQuestion} />
              <Route path='/questions/:id' component={QuestionPage} />
              <Route path='/leaderboard' component={LeaderBoard} />
            </div>}
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)