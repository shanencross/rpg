export default function Inventory() {
	this.items = new Map();
}

Inventory.prototype.addItem = function() {
	this.items.set("sword",1);
};