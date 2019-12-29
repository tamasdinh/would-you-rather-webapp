import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

class LeaderBoard extends Component {
  
  render() {
    const { userList } = this.props
    return (
      <ul>
        {userList.map(user => (
          <li key={user.id}>
            <UserCard
              user={user}/>
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  users = Object.values(users)
  users.map(user => {
    user.answerScore = Object.keys(user.answers).length
    user.createdScore = user.questions.length
  })
  let userList = []
  for (let user of users) {
    userList.push({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerScore: user.answerScore,
      createdScore: user.createdScore,
      totalScore: user.answerScore + user.createdScore
    })
  }
  userList.sort((a, b) => b.totalScore - a.totalScore)

  return {
    authedUser,
    userList
  }
}

export default connect(mapStateToProps)(LeaderBoard)