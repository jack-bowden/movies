'use client';

import { Result, TMDBProps } from '@/types';
import { InfiniteMovingCards } from './_components/InfiniteMovingCards';
import MediaCard from '@/components/MediaCard';
import Heading from '@/components/Heading';

interface HomePageClientProps {
	trendingMovies: TMDBProps;
	popularSeries: TMDBProps;
	bradPittMovies: TMDBProps;
	comedyMovies: TMDBProps;
	thisYearsMovies: TMDBProps;
	clerkUserId?: string;
	favorites: Result[] | Result | undefined;
}

const HomePageClient = ({
	trendingMovies,
	popularSeries,
	bradPittMovies,
	comedyMovies,
	thisYearsMovies,
	clerkUserId,
	favorites,
}: HomePageClientProps) => {
	return (
		<main className='container mx-auto px-4 py-6'>
			<div className='w-full flex items-center justify-start pt-4'>
				<Heading title='Trending Movies' />
			</div>

			<div className='pt-4 sm:pt-6'>
				<div className='rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
					<InfiniteMovingCards
						trendingMovies={trendingMovies}
						clerkUserId={clerkUserId || ''}
						favorites={favorites}
					/>
				</div>
			</div>
			<div className='w-full flex items-center justify-start pt-4 mb-6'>
				<Heading title='Popular Series' />
			</div>
			<div className='overflow-x-auto pb-4 custom-scrollbar'>
				<div className='flex space-x-4'>
					<MediaCard
						media={popularSeries}
						layout='scroll'
						clerkUserId={clerkUserId || ''}
						favorites={favorites}
					/>
				</div>
			</div>
			<div className='w-full flex items-center justify-start pt-4 mb-6'>
				<Heading title='Brad Pitt Movies' />
			</div>
			<div className='overflow-x-auto pb-4 custom-scrollbar'>
				<div className='flex space-x-4'>
					<MediaCard
						media={bradPittMovies}
						layout='scroll'
						clerkUserId={clerkUserId || ''}
						favorites={favorites}
					/>
				</div>
			</div>
			<div className='w-full flex items-center justify-start pt-4 mb-6'>
				<Heading title='Comedy Movies' />
			</div>
			<div className='overflow-x-auto pb-4 custom-scrollbar'>
				<div className='flex space-x-4'>
					<MediaCard
						media={comedyMovies}
						layout='scroll'
						clerkUserId={clerkUserId || ''}
						favorites={favorites}
					/>
				</div>
			</div>
			<div className='w-full flex items-center justify-start pt-4 mb-6'>
				<Heading title='2024 Movies' />
			</div>
			<div className='overflow-x-auto pb-4 custom-scrollbar'>
				<div className='flex space-x-4'>
					<MediaCard
						media={thisYearsMovies}
						layout='scroll'
						clerkUserId={clerkUserId || ''}
						favorites={favorites}
					/>
				</div>
			</div>
		</main>
	);
};

export default HomePageClient;
