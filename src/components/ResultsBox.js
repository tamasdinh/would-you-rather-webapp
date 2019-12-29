import React, { Component } from 'react'

export default class ResultsBox extends Component {
  render() {
    const { selected, noVotes, option } = this.props
    const resultsRatio = option.votes.length / noVotes
    const classes = (selected.text === option.text) ? 'results-box selected' : 'results-box'
    return (
      <div className={classes}>
        <p><strong>Would you rather {option.text}?</strong></p>
        <div className='results-bar-total'>
          <div
            className='results-bar-actual'
            style={{width: `${resultsRatio*100}%`}}
            >
            {(resultsRatio * 100).toFixed(0)}%
          </div>
        </div>
        <p className='ratio-text'><strong>{option.votes.length} out of {noVotes} votes</strong></p>
      </div>
    )
  }
}