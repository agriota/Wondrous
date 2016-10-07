import React, { createClass } from 'react';
import { connect } from 'react-redux'
import Cell from './cell.js'

let Grid = ({dispatch}) => {
  let cellNodes = []
  
  for (let i=0; i < 16; i++) {
    cellNodes.push((() => {
      return <Cell id={i} key={i}> </Cell>
    })());
  }
  
  return (
    <div>
      <div className="grid">
        {cellNodes}
      </div>
      <button onClick={e => {
          e.preventDefault()
          dispatch({type: "CALC"})
        }}>
          Calculate!
      </button>
    </div>
  )
}

export default connect()(Grid)