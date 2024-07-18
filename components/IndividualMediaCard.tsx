import { useFormatPrice } from '@/lib/useFormatPrice';
import MediaCardText from './MediaCardText';
import StarRating from './StarRatings';
import { Cast, IndividualMedia, TMDBProps } from '@/types';
import { useFormatDate } from '@/lib/useFormatDate';
import MediaCard from './MediaCard';
import CastCard from './CastCard';
import { auth } from '@clerk/nextjs/server';
import { getFavorites } from '@/hooks/getFavorites';

interface IndividualMediaCardProps {
	media: IndividualMedia;
	cast: Cast;
	similar: TMDBProps;
}

const IndividualMediaCard = async ({
	media,
	cast,
	similar,
}: IndividualMediaCardProps) => {
	const { userId: clerkUserId } = auth();
	const favorites = await getFavorites(clerkUserId!);

	const handleBudgetDisplay = () => {
		if (media.budget > 0) {
			return (
				<MediaCardText
					title='Budget'
					description={useFormatPrice(media.budget)}
				/>
			);
		} else if (media.budget === 0) {
			return (
				<MediaCardText
					title='Budget'
					description='Unknown'
				/>
			);
		} else {
			return (
				<MediaCardText
					title='Seasons'
					description={media.number_of_seasons}
				/>
			);
		}
	};

	const handleRevenueDisplay = () => {
		if (media.revenue > 0) {
			return (
				<MediaCardText
					title='Revenue'
					description={useFormatPrice(media.revenue)}
				/>
			);
		} else if (media.revenue === 0) {
			return (
				<MediaCardText
					title='Revenue'
					description='Unknown'
				/>
			);
		} else {
			return (
				<MediaCardText
					title='Episodes'
					description={media.number_of_episodes}
				/>
			);
		}
	};

	const handleRuntimeDisplay = () => {
		if (media.runtime && media.runtime > 0) {
			return (
				<MediaCardText
					title='Runtime'
					description={`${media.runtime} minutes`}
				/>
			);
		} else if (media.episode_run_time && media.episode_run_time > 0) {
			return (
				<MediaCardText
					title='Runtime'
					description={`${media.episode_run_time} minutes`}
				/>
			);
		} else {
			return (
				<MediaCardText
					title='Runtime'
					description='Unknown'
				/>
			);
		}
	};

	return (
		<div className='w-full space-y-6 relative h-full'>
			<div className='w-full mb-6'>
				<div className='flex justify-start'>
					<MediaCardText title={media.title || media.name} />
				</div>
			</div>
			<div className='relative w-full h-96'>
				<img
					src={`https://image.tmdb.org/t/p/w500${media.backdrop_path}`}
					alt={media.title || media.name || 'Image'}
					className='w-full h-full object-cover rounded-lg opacity-20'
				/>
				<div className='absolute bottom-0 left-0 w-full p-4'>
					<div className='w-full grid grid-cols-2 gap-y-2'>
						<div className='space-y-2'>
							{handleBudgetDisplay()}
							{handleRevenueDisplay()}
							<MediaCardText
								title='Release Date'
								description={useFormatDate(
									media.release_date || media.first_air_date || 0
								)}
							/>
							{handleRuntimeDisplay()}
						</div>
						<div className='space-y-2 flex flex-col justify-end md:items-end'>
							<MediaCardText
								title='Rating'
								description={media.vote_average.toFixed(1)}
							/>
							<MediaCardText
								title='Votes'
								description={media.vote_count}
							/>
							<MediaCardText
								title='Popularity'
								description={media.popularity.toFixed(1)}
							/>
							{media.genres.length > 0 && (
								<MediaCardText
									title='Genre'
									description={media.genres[0].name}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className='relative z-10 mt-6'>
				<div className='flex justify-start items-center truncate mb-6'>
					<StarRating rating={media.vote_average} />
				</div>
			</div>
			<div className='mb-6'>
				<MediaCardText title='Cast' />
			</div>
			<div className='overflow-x-auto custom-scrollbar pb-4'>
				<div className='flex space-x-4'>
					<CastCard
						layout='scroll'
						media={cast}
					/>
				</div>
			</div>
			<div className='mb-6'>
				<MediaCardText title='Similar' />
			</div>
			<div className='overflow-x-auto custom-scrollbar pb-4'>
				<div className='flex space-x-4'>
					<MediaCard
						layout='scroll'
						media={similar}
						favorites={favorites}
					/>
				</div>
			</div>
		</div>
	);
};

export default IndividualMediaCard;
