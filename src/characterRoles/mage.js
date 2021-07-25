import storeState from './../stateFunctions/storeState.js'

const mage = storeState({
  hp: 30,
  mp: 150,
  strength: 40,
  defense: 20,
  agility: 70,
  intelligence: 200
})

export default mage;