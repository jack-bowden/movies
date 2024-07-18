export function useFormatDate(dateInput: string | number | Date) {
	if (!dateInput) return 'N/A';

	let date;
	if (typeof dateInput === 'string') {
		// If it's a string, assume it's in YYYY-MM-DD format
		date = new Date(dateInput);
	} else if (typeof dateInput === 'number') {
		// If it's a number, assume it's a timestamp
		date = new Date(dateInput);
	} else {
		return 'Invalid Date';
	}

	// Check if the date is valid
	if (isNaN(date.getTime())) {
		return 'Invalid Date';
	}

	return new Intl.DateTimeFormat('en-GB', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	})
		.format(date)
		.replace(/\//g, '-');
}
