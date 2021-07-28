import canFight from `./../abilities/canFight`;

const knight = (name) => {
  let state = {
    name,
    hp: 80,
    mp: 50,
    strength: 200,
    defense: 100,
    agility: 5,
    intelligence: 5
  }

  return {...state, ...canFight(state)};
}

export default knight;