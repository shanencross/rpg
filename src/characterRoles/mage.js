import canCastSpell from `./../abilities/canCastSpell`;

const mage = (name) => {
  let state = {
    name,
    hp: 30,
    mp: 150,
    strength: 40,
    defense: 20,
    agility: 70,
    intelligence: 200
  }

  return {...state, ...canCastSpell(state)};
}

export default mage;