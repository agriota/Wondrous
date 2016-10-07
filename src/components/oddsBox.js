import React, { createClass } from 'react';

const OddsBox = createClass({
  render() {
    const {odds, label} = this.props
    let firstText = "Chance of " + label + ": "
    let secondText = "Chance of better shuffle: "
    return(
      <div className="oddsBox">
        <div className="oddsLine">
          <div className="oddstext">{firstText}</div>
          <div className="oddsVal">{odds[0]}</div>
        </div>
        <div className="oddsLine">
          <div className="oddstext">{secondText}</div>
          <div className="oddsVal">{odds[1]}</div>
        </div>
      </div>
    )
  }
})

export default OddsBox