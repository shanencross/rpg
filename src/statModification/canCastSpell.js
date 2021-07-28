const canCastSpell = function(character) {
  const obj = {
    castSpell: function(spellName) {
      /* addToState("mp")(-20);   <--- ????
      if(character.mp >= (value)) {
      */
      return `The ${character.name} cast ${spellName}!`
      /* else {
        return 'The ${character.name} doesnt have enough mana! ${spellName} fizzles.'
        */
    }
  }
  return obj;
}

/*
const magicMissle = addToState("mp")(-5)
const fireBall = addToState("mp")(-50)
*/