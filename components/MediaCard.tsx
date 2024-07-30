'use client';

import { Result, TMDBProps } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useToggleFavorite } from '@/actions/useToggleFavorite';
import { toast } from 'react-toastify';

interface MediaCardProps {
	media: TMDBProps | Result[];
	layout: 'grid' | 'scroll';
	clerkUserId?: string;
	favorites: Result[] | Result | undefined;
}

const isMovieOrTvShow = (item: Result) => {
	return item.title ? 'movies' : 'tvshows';
};

const isFavorite = (
	favorites: Result[] | Result | undefined,
	favoriteId: number | string
) => {
	if (Array.isArray(favorites)) {
		return favorites.some(favorite => favorite.favoriteId == favoriteId);
	} else if (favorites) {
		return favorites.favoriteId == favoriteId;
	}
};

const handleFavoriteToggle = (
	item: Result,
	clerkUserId: string | undefined
) => {
	if (clerkUserId) {
		useToggleFavorite(item, clerkUserId);
	} else {
		toast.error('Please log in/sign up in order to access favorites!');
	}
};

const MediaCard = ({
	media,
	layout,
	clerkUserId,
	favorites,
}: MediaCardProps) => {
	return (
		<>
			{(Array.isArray(media) ? media : media.results).map(
				item =>
					item.poster_path &&
					item.backdrop_path && (
						<div
							key={item.id}
							className={`relative rounded-lg border overflow-hidden hover:shadow-md hover:shadow-green-500 transition-all ${
								layout === 'grid'
									? 'w-full'
									: 'w-32 sm:w-40 md:w-44 flex-shrink-0'
							}`}
							style={{
								aspectRatio: '2/3',
							}}
						>
							<div className='relative group'>
								{isFavorite(favorites, item.id) ? (
									<FaHeart
										onClick={() =>
											handleFavoriteToggle(item, clerkUserId || '')
										}
										className='absolute top-1 right-1 z-10 text-white transition-all duration-200 group-hover:opacity-100 group-hover:scale-110 cursor-pointer'
										size={28}
									/>
								) : (
									<FaRegHeart
										onClick={() =>
											handleFavoriteToggle(item, clerkUserId || '')
										}
										className='absolute top-1 right-1 z-10 text-white transition-all duration-200 group-hover:opacity-100 group-hover:scale-110 cursor-pointer'
										size={28}
									/>
								)}
								<p className='font-bold text-lg py-1 px-1.5 text-white absolute z-20 '>
									{item.vote_average.toFixed(1)}
								</p>
							</div>
							<Link href={`/${isMovieOrTvShow(item)}/${item.id}`}>
								<div className='relative w-full h-full'>
									<Image
										src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
										alt={item.name || item.title || 'Image'}
										fill
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black to-black/20 opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300'>
										<div className='absolute bottom-0 left-0 right-0 p-4'>
											<h3 className='text-white text-sm font-semibold line-clamp-2'>
												{item.name || item.title}
											</h3>
											<p className='text-gray-300 text-xs mt-1'>
												{item.first_air_date || item.release_date}
											</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
					)
			)}
		</>
	);
};

export default MediaCard;
