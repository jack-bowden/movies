import { auth } from '@clerk/nextjs/server';
import HomePageClient from './HomepageClient';
import { getTrendingMovies } from '@/hooks/getTrendingMovies';
import { getPopularTvShows } from '@/hooks/getPopularTvShows';
import { getFavorites } from '@/hooks/getFavorites';
import { getBradPittMovies } from '@/hooks/getBradPittMovies';
import { getComedyMovies } from '@/hooks/getComedyMovies';
import { getThisYearsMovies } from '@/hooks/getThisYearsMovies';

export default async function Home() {
	const { userId: clerkUserId } = auth();
	const [
		trendingMovies,
		popularSeries,
		favorites,
		bradPittMovies,
		comedyMovies,
		thisYearsMovies,
	] = await Promise.all([
		getTrendingMovies(),
		getPopularTvShows(),
		getFavorites(clerkUserId!),
		getBradPittMovies(),
		getComedyMovies(),
		getThisYearsMovies(),
	]);

	return (
		<HomePageClient
			trendingMovies={trendingMovies}
			popularSeries={popularSeries}
			bradPittMovies={bradPittMovies}
			comedyMovies={comedyMovies}
			thisYearsMovies={thisYearsMovies}
			clerkUserId={clerkUserId || ''}
			favorites={favorites}
		/>
	);
}
