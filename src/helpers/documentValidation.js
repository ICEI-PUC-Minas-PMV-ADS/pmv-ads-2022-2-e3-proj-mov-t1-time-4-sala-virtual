const isValidCPF = (number) => {
	const match = number.match(/\d/g);
	const numbers = Array.isArray(match) ? match.map(Number) : [];
	const items = [...new Set(numbers)];
	if (items.length === 1) {
		return false;
	}
	for (let t = 9; t < 11; t++) {
		let d = 0;
		let c = 0;
		for (d, c; c < t; c++) {
			d += number[c] * ((t + 1) - c);
		}
		d = ((10 * d) % 11) % 10;
		if (parseInt(number[c]) !== d) {
			return false;
		}
	}
	return true;
}

const isValidCNPJ = (number) => {
	const match = number.match(/\d/g);
	const numbers = Array.isArray(match) ? match.map(Number) : [];
	const items = [...new Set(numbers)];
	if (items.length === 1) {
		return false;
	}
	const calc = (x) => {
		const slice = numbers.slice(0, x);
		let factor = x - 7;
		let sum = 0;
		for (let i = x; i >= 1; i--) {
			const n = slice[x - i];
			sum += n * factor--;
			if (factor < 2) factor = 9;
		}
		const result = 11 - (sum % 11);
		return result > 9 ? 0 : result;
	}
	const digits = numbers.slice(12);
	const digit0 = calc(12);
	if (digit0 !== digits[0]) {
		return false;
	}
	const digit1 = calc(13);
	return digit1 === digits[1];
}

export {isValidCPF, isValidCNPJ};
