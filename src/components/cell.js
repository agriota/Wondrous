import React, { createClass } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state,ownProps) => {
  return {
    active: state.active[ownProps.id]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => {
      dispatch({type: "TOGGLE", id: ownProps.id})
    }
  }
}

const Cell = createClass ({
  shouldComponentUpdate(newProps) {
    return this.props.active != newProps.active 
  },
  handleClick(e) {
    
  },
  render() {
    let cl = "cell " + (this.props.active ? "on" : "off")
    return (
      <div className={cl} onClick={this.props.handleClick}>
      </div>
    )
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Cell)
