import { ODDSTABLE, INITSTATE, CELLS } from './constants.js'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CalcView from './components/calcView.js'
import { filter, difference } from 'underscore'
import { getOdds } from './lines.js'


var wondrous = function(state = INITSTATE, action) {
  let newstate = JSON.parse(JSON.stringify(state))
  
  switch(action.type) {
    case 'TOGGLE': 
      newstate.active[action.id] = !newstate.active[action.id]
      return newstate
    case 'CALC': 
      let actives = filter(CELLS, i => state.active[i-1])
      let nons = difference(CELLS, actives)
      
      if (actives.length != 7) {
        return state;
      }
      
      //calculate our odds
      newstate.odds = getOdds(actives, nons)
      return newstate;
    default: return state;
  }
}

let store = createStore(wondrous);

render(
  <Provider store={store}>
    <CalcView />
  </Provider>,
  document.getElementById('content')
);