import Inventory from './../src/inventory.js';

describe ('Inventory', () => {
	test ('Create an inventory object where its items property is an empty map', () => {
		let myInventory = new Inventory();
		let emptyMap = new Map();
		expect(myInventory.items).toEqual(emptyMap);
	});

	test ('Add items to the inventory object', () => {
		let myInventory = new Inventory ();
		myInventory.addItem("sword"); 
		expect(myInventory.items.get("sword")).toEqual(1);
	});

	test ('Increase the quantity of the item when the same item multiple times', () => {
		let myInventory = new Inventory ();
		myInventory.addItem("sword");
		myInventory.addItem("sword");
		expect(myInventory.items.get("sword")).toEqual(2);
	})
});
