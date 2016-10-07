import React, { createClass } from 'react';
import { connect } from 'react-redux'
import Cell from './cell.js'
import { filter } from 'underscore'

const mapStateToProps = (state, ownProps) => {
  return {
    count: filter(state.active, x=>x).length
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: (e) => {
      e.preventDefault()
      dispatch({type: "CALC"})
    }
  }
}

const Grid = createClass({
  render() {
    let btext = this.props.count == 7 ? "Calculate!" : "Select 7"
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
        <button onClick={this.props.handleClick}>
          {btext}
        </button>
      </div>
    )
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Grid)