import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {

  handleLogout = () => {
    this.props.dispatch(setAuthedUser(''))
  }

  render() {
    const { userName, avatarURL } = this.props
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
        </ul>
        {userName &&
          <div className='authed-user-greeting'>
            <p>Hello, {userName}</p>
            <img src={avatarURL}/>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        }
      </nav>
    )
  }
}

export default withRouter(connect()(Nav))