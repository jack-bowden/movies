import { TMDBProps } from '@/types';

const url =
	'https://api.themoviedb.org/3/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&with_genres=35';
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
	},
};

export async function getComedyMovies(): Promise<TMDBProps> {
	const response = await fetch(url, {
		...options,
		next: { revalidate: 86400 },
	});
	const data = await response.json();

	return data;
}
