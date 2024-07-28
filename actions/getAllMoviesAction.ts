'use server';

import { getAllMovies } from '@/hooks/getAllMovies';
import { revalidatePath } from 'next/cache';

export default async function getAllMoviesAction(
	sortValue: string,
	page: number
) {
	const results = await getAllMovies(sortValue, page.toString());
	revalidatePath('/movies');

	return results;
}
