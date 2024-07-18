import { TMDBProps } from '@/types';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
	},
};

export async function getAllTvShows(
	page?: string | undefined,
	sort?: string | undefined
): Promise<TMDBProps> {
	switch (sort) {
		case 'most popular':
			sort = 'popularity.desc';
			break;
		case 'least popular':
			sort = 'popularity.asc';
			break;
		case 'highest rated':
			sort = 'vote_average.desc';
			break;
		default:
			sort = 'vote_average.asc';
			break;
	}

	const response = await fetch(
		`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort}&vote_count.gte=1000`,
		{
			...options,
			next: { revalidate: 86400 },
		}
	);
	const data = await response.json();

	return data;
}
