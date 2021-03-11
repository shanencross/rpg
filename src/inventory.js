export default class Inventory {
	constructor() {
		this.items = new Map();
	}

	addItem(item) {
		if (this.items.has(item)) {
			let currentItemQuantity = this.items.get(item);
			this.items.set(item, currentItemQuantity + 1);
		}
		else {
			this.items.set(item, 1);
		}
	};
}