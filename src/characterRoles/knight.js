import storeState from './../stateFunctions/storeState.js'

const knight = storeState({
  hp: 80,
  mp: 50,
  strength: 200,
  defense: 100,
  agility: 5,
  intelligence: 5
})

export default knight;