import storeState from './../stateFunctions/storeState.js'

const thief = storeState({
  hp: 50,
  mp: 50,
  strength: 10,
  defense: 15,
  agility: 100,
  intelligence: 50
})

export default thief;