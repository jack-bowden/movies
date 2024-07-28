'use server';

import { getAllTvShows } from '@/hooks/getAllTvShows';
import { revalidatePath } from 'next/cache';

export default async function getAllTvShowsAction(
	sortValue: string,
	page: number
) {
	const results = await getAllTvShows(sortValue, page.toString());
	revalidatePath('/movies');

	return results;
}
