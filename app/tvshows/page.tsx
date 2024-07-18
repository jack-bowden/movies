import { auth } from '@clerk/nextjs/server';
import TvShowsPageClient from './TvShowsPageClient';
import { getAllTvShows } from '@/hooks/getAllTvShows';
import { getFavorites } from '@/hooks/getFavorites';

const TvShowsPage = async ({
	searchParams,
}: {
	searchParams: { page?: string; sort?: string };
}) => {
	const { userId: clerkUserId } = auth();
	const { page, sort } = searchParams;
	const tvshows = await getAllTvShows(
		page ? page : '1',
		sort ? sort?.toLowerCase() : 'most popular'
	);
	const favorites = await getFavorites(clerkUserId!);

	return (
		<TvShowsPageClient
			tvshows={tvshows}
			clerkUserId={clerkUserId || ''}
			favorites={favorites}
		/>
	);
};

export default TvShowsPage;
