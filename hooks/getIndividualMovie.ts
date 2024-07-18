import { Cast, IndividualMedia, TMDBProps } from '@/types';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
	},
};

export async function getIndividualMovie(id: string): Promise<IndividualMedia> {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
		{
			...options,
			next: { revalidate: 86400 },
		}
	);
	const data = await response.json();

	return data;
}

export async function getMovieCast(id: string): Promise<Cast> {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
		{
			...options,
			next: { revalidate: 86400 },
		}
	);
	const data = await response.json();

	return data;
}

export async function getMovieSimilar(id: string): Promise<TMDBProps> {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
		{
			...options,
			next: { revalidate: 86400 },
		}
	);
	const data = await response.json();

	return data;
}
