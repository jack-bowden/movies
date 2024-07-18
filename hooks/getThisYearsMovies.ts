import { TMDBProps } from '@/types';

const url =
	'https://api.themoviedb.org/3/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&primary_release_year=2024&sort_by=vote_count.desc';
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
	},
};

export async function getThisYearsMovies(): Promise<TMDBProps> {
	const response = await fetch(url, {
		...options,
		next: { revalidate: 86400 },
	});
	const data = await response.json();

	return data;
}
