import { TMDBProps } from '@/types';

let page = 1;

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
	},
};

export async function getSearchResults(query: string): Promise<TMDBProps> {
	const response = await fetch(
		`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`,
		{
			...options,
			next: { revalidate: 86400 },
		}
	);
	const data = await response.json();

	return data;
}
