import Inventory from './../src/inventory.js';

describe ('Inventory', () => {
	test ('Create an inventory object where its items property is an empty map', () => {
		let inventory = new Inventory();
		let emptyMap = new Map();
		expect(inventory.items).toEqual(emptyMap);
	});
});