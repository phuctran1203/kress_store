export function NumberToMoney(number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(number);
}
export function MoneyToNumber(number) {
	const numberString = number.replace(/[$,]/g, "");
	return parseFloat(numberString);
}

export function FormatSold({ sold }) {
	if (sold >= 1000000) {
		return (sold / 1000000).toFixed(1) + "M";
	} else if (sold >= 1000) {
		return (sold / 1000).toFixed(1) + "k";
	} else {
		return sold;
	}
}
