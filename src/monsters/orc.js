import canFight from `./../abilities/canFight`;

const orc = (name) => {
  let state = {
    name,
    hp: 55,
    mp: 20,
    strength: 300,
    defense: 250,
    agility: 20,
    intelligence: 5
  }

  return {...state, ...canFight(state)};
}

export default orc;