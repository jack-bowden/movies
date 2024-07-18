import { Person } from '@/types';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
	},
};

export async function getPerson(id: string): Promise<Person> {
	const response = await fetch(
		`https://api.themoviedb.org/3/person/${id}?language=en-US`,
		{
			...options,
			next: { revalidate: 86400 },
		}
	);
	const data = await response.json();

	return data;
}
