const loginGuard = (thisRef, atLogin) => {
  if (!thisRef.props.authedUser) {
    console.log(thisRef.props.match)
    atLogin
      ? alert('You are not logged in. Please log in to use the feature.')
      : alert('You have logged out. Redirecting you to the Login page...')
    thisRef.props.history.push('/login')
  }
}

export default loginGuard