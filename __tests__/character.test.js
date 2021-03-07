import Character from './../src/character.js'; 

describe ('Character', () => {
  test ('should correctly create a character object for a knight with different hp 80 and mp 50 vlaues', () => {
		const character = new Character ("knight");
		expect(character.hp).toEqual(80);
		expect(character.mp).toEqual(50);
	}); 

	test ('should correctly create a character object for a mage with different hp 30 and mp 150 vlaues', () => {
		const character = new Character ("mage");
		expect(character.hp).toEqual(30);
		expect(character.mp).toEqual(150);
	}); 

	test ('should correctly create a character object for a thief with different hp 30 and mp 150 vlaues', () => {
		const character = new Character ("thief");
		expect(character.hp).toEqual(50);
		expect(character.mp).toEqual(50);
	});

	test ('should create a thief character with the correct stats values (Strength of 10, Defense of 15, Agility of 100, Intelligence of 50)', () => {
		const character = new Character("thief");
		expect(character.strength).toEqual(10);
		expect(character.defense).toEqual(15);
		expect(character.agility).toEqual(100);
		expect(character.intelligence).toEqual(50);
	});
});