import PropTypes from 'prop-types'
import styles from './Roy.module.css'
import { useState, useEffect } from 'react'

export const Roy = ({
}) => {

  const quiz = [
    {
      question: "Scuba dive",
      points: 1
    },
    {
      question: "Sky dive",
      points: 2
    },
    {
      question: "Speak to a crowd of over 500 people",
      points: 3
    },
    {
      question: "Lose virginity",
      points: 4
    },
    {
      question: "Kill a man with your bare hands",
      points: -50
    },
  ]

  const [score, setScore] = useState(0)

  const updato = (e, q) => {
    const p = q.points
    const delta = e.target.checked ? p : -p
    setScore(score + delta)
  }

  return (
    <>
      { quiz.map((q, i) => (
	<div key={ i }>
	  <input
	  onChange={e => updato(e, q)}
	  type="checkbox"
	  />
	  <span>
	    &nbsp;
	    { q.question }
	    {/* &nbsp;({ q.points }) */}
	  </span>
	</div>
      )) }
      <hr/>
      <p>Score: { score }</p>
    </>
  )
}

Roy.propTypes = {
}
