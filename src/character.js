export default function Character (characterType) {
	if (characterType === "knight") {
		this.hp = 80;
		this.mp = 50;
		this.strength = 200;
		this.defense = 100;
		this.agility = 5;
		this.intelligence = 5;
	} else if (characterType === "mage") {
		this.hp = 30;
		this.mp = 150;
		this.strength = 40;
		this.defense = 20;
		this.agility = 70;
		this.intelligence = 200;
	} else if (characterType === "thief") {
		this.hp = 50;
		this.mp = 50;
		this.strength = 10;
		this.defense = 15;
		this.agility = 100
		this.intelligence = 50;
	}
}