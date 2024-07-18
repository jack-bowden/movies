import MoviesPageClient from './MoviesPageClient';
import { auth } from '@clerk/nextjs/server';
import { getAllMovies } from '@/hooks/getAllMovies';
import { getFavorites } from '@/hooks/getFavorites';

const MoviePage = async ({
	searchParams,
}: {
	searchParams: { page?: string; sort?: string };
}) => {
	const { userId: clerkUserId } = auth();
	const { page, sort } = searchParams;
	const movies = await getAllMovies(
		page ? page : '1',
		sort ? sort?.toLowerCase() : 'most popular'
	);
	const favorites = await getFavorites(clerkUserId!);

	return (
		<MoviesPageClient
			movies={movies}
			clerkUserId={clerkUserId || ''}
			favorites={favorites}
		/>
	);
};

export default MoviePage;
