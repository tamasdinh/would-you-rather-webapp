import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Nav from './Nav'
import { BrowserRouter, Route } from 'react-router-dom'
import LeaderBoard from './LeaderBoard'
import QuestionSubmit from './QuestionSubmit'
import QuestionResults from './QuestionResults'
import Login from './Login'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <LoadingBar />
          <Nav
            userName={this.props.userName}
            avatarURL={this.props.avatarURL}
          />
          {this.props.loading === true
          ? null
          : <div>
              <Route path='/login' exact component={Login} />
              <Route path='/' exact component={Dashboard} />
              <Route path='/new' component={NewQuestion} />
              <Route path='/questions/:id' exact component={QuestionSubmit} />
              <Route path='/questions/:id/results' exact component={QuestionResults} />
              <Route path='/leaderboard' component={LeaderBoard} />
            </div>}
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loading: authedUser === null,
    userName: authedUser ? users[authedUser].name : null,
    avatarURL: authedUser ? users[authedUser].avatarURL : null
  }
}

export default connect(mapStateToProps)(App)