export const useCapitalizeQuery = (query: string) => {
	if (!query) return '';

	if (!query.includes(' '))
		return query.charAt(0).toUpperCase() + query.slice(1);

	if (query.includes(' ')) {
		return query
			.split(' ')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
};
