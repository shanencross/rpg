// import Character from './../src/character.js';
import knight from './../src/characterRoles/knight.js';
import mage from './../src/characterRoles/mage.js';
import thief from './../src/characterRoles/thief.js';

describe ('Character', () => {
	let someKnight;
	let someMage;
	let someThief;
	beforeEach(() => {
		someKnight = knight("Jon");
	  someMage = mage("Tim");
	  someThief = thief("Bob");
	});

  test ('should correctly create a character object for a knight with different hp 80 and mp 50 vlaues', () => {
		expect(someKnight.hp).toEqual(80);
		expect(someKnight.mp).toEqual(50);
	}); 
	
	test ('should create a knight character with the correct stats values (Strength of 200, Defense of 100, Agility of 5, Intelligence of 5)', () => {
		expect(someKnight.strength).toEqual(200);
		expect(someKnight.defense).toEqual(100);
		expect(someKnight.agility).toEqual(5);
		expect(someKnight.intelligence).toEqual(5);
	});

	test ('should correctly create a character object for a mage with different hp 30 and mp 150 vlaues', () => {
		expect(someMage.hp).toEqual(30);
		expect(someMage.mp).toEqual(150);
	});

	test ('should create a mage character with the correct stats values (Strength of 40, Defense of 20, Agility of 70, Intelligence of 200)', () => {
		expect(someMage.strength).toEqual(40);
		expect(someMage.defense).toEqual(20);
		expect(someMage.agility).toEqual(70);
		expect(someMage.intelligence).toEqual(200);
	});


	test ('should correctly create a character object for a thief with different hp 30 and mp 150 vlaues', () => {
		expect(someThief.hp).toEqual(50);
		expect(someThief.mp).toEqual(50);
	});

	test ('should create a thief character with the correct stats values (Strength of 10, Defense of 15, Agility of 100, Intelligence of 50)', () => {
		expect(someThief.strength).toEqual(10);
		expect(someThief.defense).toEqual(15);
		expect(someThief.agility).toEqual(100);
		expect(someThief.intelligence).toEqual(50);
	});
});