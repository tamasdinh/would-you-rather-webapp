import React from 'react'

export default function ResultsBox (props) {
  const { selected, noVotes, option } = props
  const resultsRatio = option.votes.length / noVotes
  let classes = 'results-box'
  if (selected) {
    classes += ' '
    classes += (selected.text === option.text) ? 'selected' : ''
  }
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