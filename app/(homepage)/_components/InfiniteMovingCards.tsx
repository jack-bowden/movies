'use client';

import { useToggleFavorite } from '@/actions/useToggleFavorite';
import Favorites from '@/components/Favorites';
import { cn } from '@/lib/utils';
import { Result, TMDBProps } from '@/types';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface InfiniteMovingCardsProps {
	direction?: 'left' | 'right';
	speed?: 'fast' | 'normal' | 'slow';
	pauseOnHover?: boolean;
	className?: string;
	trendingMovies: TMDBProps;
	clerkUserId?: string;
	favorites: Result[] | Result | undefined;
}

export const InfiniteMovingCards = ({
	direction = 'right',
	speed = 'slow',
	pauseOnHover = true,
	className,
	trendingMovies,
	clerkUserId,
	favorites,
}: InfiniteMovingCardsProps) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	console.log('favorites:', favorites);
	console.log('clerkUserId:', clerkUserId);

	useEffect(() => {
		addAnimation();
	}, []);

	const [start, setStart] = useState(false);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach(item => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'forwards'
				);
			} else {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'reverse'
				);
			}
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty('--animation-duration', '20s');
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '40s');
			} else {
				containerRef.current.style.setProperty('--animation-duration', '110s');
			}
		}
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

	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-10 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					'flex min-w-full shrink-0 gap-4 pb-4 w-max flex-nowrap',
					start && 'animate-scroll',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}
			>
				{trendingMovies.results.map(item => (
					<li
						key={item.id}
						className='relative'
					>
						{/* <div className='relative group'>
							{isFavorite(favorites, item.id) ? (
								<FaHeart
									onClick={() => console.log('Clicked')}
									className='absolute top-1 right-1 z-50 text-white transition-all duration-200 group-hover:opacity-100 group-hover:scale-110 cursor-pointer'
									size={28}
								/>
							) : (
								<FaRegHeart
									onClick={() => console.log('Clicked')}
									className='absolute top-1 right-1 z-50 text-white transition-all duration-200 group-hover:opacity-100 group-hover:scale-110 cursor-pointer'
									size={28}
								/>
							)}
							<p className='font-bold text-lg py-1 px-1.5 text-white absolute z-20 '>
								{item.vote_average.toFixed(1)}
							</p>
						</div> */}
						<Link href={`/movies/${item.id}`}>
							<div
								className='w-56 h-36 md:w-96 md:h-44 max-w-full relative rounded-2xl border flex-shrink-0 px-8 py-6 cursor-pointer'
								style={{
									backgroundImage: `url(https://image.tmdb.org/t/p/original${item.poster_path})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
									opacity: 0.8,
								}}
							>
								<div className='absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50'>
									<h3 className='text-white text-sm sm:text-md font-semibold'>
										{item.title}
									</h3>
									<p className='text-gray-300 text-sm'>{item.release_date}</p>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
