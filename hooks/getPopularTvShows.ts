import { TMDBProps } from '@/types';

const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
	},
};

export async function getPopularTvShows(): Promise<TMDBProps> {
	const response = await fetch(url, {
		...options,
		next: { revalidate: 86400 },
	});
	const data = await response.json();

	return data;
}
