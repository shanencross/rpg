import canFight from `./../abilities/canFight`;
import canCastSpell from `./../abilities/canCastSpell`;

const jabberwocky = (name) => {
  let state = {
    name,
    hp: 1500,
    mp: 2000,
    strength: 600,
    defense: 700,
    agility: 150,
    intelligence: 100
  }

  return {...state, ...canFight(state), ...canCastSpell(state)};
}

export default jabberwocky;