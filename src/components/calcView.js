import React, { createClass, PropTypes } from 'react';
import Grid from './grid.js'
import OddsBox from './oddsBox.js'

const CalcView = createClass({
  contextTypes: {
    store: PropTypes.object
  },
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  },
  componentWillUnmount() {
    this.unsubscribe()
  },
  render() {
    const { store } = this.context;
    const { active, odds } = store.getState();

    return (
      <div className="calc">
        <div className="leftPane">
          <Grid active={active} />
        </div>
        <div className="rightPane">
          <OddsBox label="One Line" odds={odds[0]} />
          <OddsBox label="Two Lines" odds={odds[1]} />
          <OddsBox label="Three Lines" odds={odds[2]} />
        </div>
      </div>
    );
  }
})

export default CalcView