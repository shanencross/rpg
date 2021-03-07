import Character from './../src/character.js'; 

describe ('Character', () => {
  test ('should correctly create a character object with different hp 80 and mp 50 vlaues', () => {
		const character = new Character ("knight");
		expect(character.hp).toEqual(80);
		expect(character.mp).toEqual(50);
	}); 
});