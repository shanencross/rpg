import canFight from `./../abilities/canFight`;

const goblin = (name) => {
  let state = {
    name,
    hp: 15,
    mp: 10,
    strength: 20,
    defense: 10,
    agility: 45,
    intelligence: 1
  }

  return {...state, ...canFight(state)};
}

export default goblin;