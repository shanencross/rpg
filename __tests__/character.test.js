import Character from './../src/character.js'; 

describe ('Character', () => {
	let knight;
	let mage;
	let thief;
	beforeEach(() => {
		knight = new Character("knight");
	  mage = new Character("mage");
	  thief = new Character("thief");
	});

  test ('should correctly create a character object for a knight with different hp 80 and mp 50 vlaues', () => {
		expect(knight.hp).toEqual(80);
		expect(knight.mp).toEqual(50);
	}); 
	
	test ('should create a knight character with the correct stats values (Strength of 200, Defense of 100, Agility of 5, Intelligence of 5)', () => {
		expect(knight.strength).toEqual(200);
		expect(knight.defense).toEqual(100);
		expect(knight.agility).toEqual(5);
		expect(knight.intelligence).toEqual(5);
	});

	test ('should correctly create a character object for a mage with different hp 30 and mp 150 vlaues', () => {
		expect(mage.hp).toEqual(30);
		expect(mage.mp).toEqual(150);
	});

	test ('should create a mage character with the correct stats values (Strength of 40, Defense of 20, Agility of 70, Intelligence of 200)', () => {
		expect(mage.strength).toEqual(40);
		expect(mage.defense).toEqual(20);
		expect(mage.agility).toEqual(70);
		expect(mage.intelligence).toEqual(200);
	});


	test ('should correctly create a character object for a thief with different hp 30 and mp 150 vlaues', () => {
		expect(thief.hp).toEqual(50);
		expect(thief.mp).toEqual(50);
	});

	test ('should create a thief character with the correct stats values (Strength of 10, Defense of 15, Agility of 100, Intelligence of 50)', () => {
		expect(thief.strength).toEqual(10);
		expect(thief.defense).toEqual(15);
		expect(thief.agility).toEqual(100);
		expect(thief.intelligence).toEqual(50);
	});
});