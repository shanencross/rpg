	const hasStrength = (character) => ({
		strength: (value) => {
			return character.type = { strength : value}
		}
	});


	const hasDefense = (character) => ({
		defense: (value) => {
			return character.type = { defense : value}
		}
	});

	const characterHasStrengthDefense = (type) => {
	let character = {
		type
	}

	return { ...character, ...hasStrength(character), ...hasDefense(character) };

	};

	const mage = characterHasStrengthDefense("mage");

////////////////////////

const hasStrength = (value) => {
	return { strength: value || 0 }; 
};

const characterWithStrength = (character) => {
	return (value) => {
			return { ...character, ...hasStrength(value) }
	}     
}