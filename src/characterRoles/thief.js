import canSneak from `./../abilities/canSneak`;
import canBackstab from `./../abilities/canBackstab`;

const thief = (name) => {
  let state = {
    name,
    hp: 50,
    mp: 50,
    strength: 10,
    defense: 15,
    agility: 100,
    intelligence: 50
  }

  return {...state, ...canSneak(state), ...canBackstab(state)};
}

export default thief;