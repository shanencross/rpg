import Inventory from './../src/inventory.js';

describe ('Inventory', () => {
	test ('Create an inventory object where its items property is an empty map', () => {
		let inventory = new Inventory();
		let emptyMap = new Map();
		expect(inventory.items).toEqual(emptyMap);
	});

	test ('Add items to the inventory object', () => {
		let myInventory = new Inventory ();
		myInventory.addItem("sword"); 
		expect(myInventory.items.get("sword")).toEqual(1);
	});
});
