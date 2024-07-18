export function useFormatPrice(price: number) {
	return new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'GBP',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(price);
}
