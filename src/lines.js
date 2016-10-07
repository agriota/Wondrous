import { some, every, map, filter, each, zip, contains } from 'underscore'
import { SUBSEQUENCE, ODDSTABLE } from './constants.js'
import { sprintf } from 'sprintf-js'


let check = (xs,ls) => {
  return some(ls,l => every(l, y => contains(xs,y)))
}

let horizontal = (xs) => {
  return check(xs, [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])
}

let vertical = (xs) => {
  return check(xs, [[1,5,9,13],[2,6,10,14],[3,7,11,15],[4,8,12,16]])
}

let diagonal = (xs) => {
  return check(xs, [[1,6,11,16],[4,7,10,13]])
}

let threelines = (xs) => {
  return every([horizontal,vertical,diagonal], f => f(xs))
}

let twolines = (xs) => {
  return every([horizontal,vertical],f=>f(xs)) ||
  every([horizontal,diagonal],f=>f(xs)) ||
  every([vertical,diagonal],f=>f(xs))
}

let oneline = (xs) => {
  return some([horizontal,vertical,diagonal], f => f(xs))
}

let getOdds = (actives, nons) => {
  let potentials = map(SUBSEQUENCE, s=>actives.concat([nons[s[0]],nons[s[1]]]))
  let odds = map([oneline,twolines,threelines], f=>filter(potentials,f).length)
  let shuffles = [0,0,0]
  each(ODDSTABLE, layout => {
    each([0,1,2], i=>{
      if(odds[i] < layout[i])
        shuffles[i] += layout[3]
    })
  })
  
  return zip(map(odds, x=> sprintf("%.2f%%",(x/0.36))), map(shuffles, x=>sprintf("%.2f%%",(x/114.4))))
}

export { getOdds }