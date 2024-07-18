import { TMDBProps } from '@/types';

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
	},
};

export async function getTrendingMovies(): Promise<TMDBProps> {
	const response = await fetch(url, {
		...options,
		next: { revalidate: 86400 },
	});
	const data = await response.json();

	return data;
}
