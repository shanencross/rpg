export default function Character (characterType) {
	if (characterType === "knight") {
		this.hp = 80;
		this.mp = 50;
	} else if (characterType === "mage") {
		this.hp = 30;
		this.mp = 150;
	} else if (characterType === "thief") {
		this.hp = 50;
		this.mp = 50;
	}
}