const canCastSpell = (state) => ({
      castSpell: (spellName) => {
      /* addToState("mp")(-20);   <--- ????
      if(character.mp >= (value)) {
      */
      if (state.mp >= 20) {
        state.mp -= 20;
        return `The ${character.name} cast ${spellName}!`
      }
      else {
        return `${state.name} doesn't have enough MP! ${spellName} fizzles.`
      }
    }
  });

/*
const magicMissle = addToState("mp")(-5)
const fireBall = addToState("mp")(-50)
*/