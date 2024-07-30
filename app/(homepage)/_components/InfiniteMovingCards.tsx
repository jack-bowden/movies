'use client';

import StarRating from '@/components/StarRatings';
import { cn } from '@/lib/utils';
import { Result, TMDBProps } from '@/types';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

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
}: InfiniteMovingCardsProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollerRef = useRef<HTMLUListElement>(null);

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
								<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-100 transition-opacity duration-300'>
									<div className='absolute bottom-0 left-0 right-0 p-2'>
										<h3 className='text-white text-md sm:text-lg font-bold z-50 drop-shadow-lg truncate md:whitespace-normal'>
											{item.title}
										</h3>
										<p className='text-gray-200 text-sm z-50 drop-shadow-lg'>
											{item.release_date}
										</p>
										<StarRating
											rating={item.vote_average}
											dimension='16px'
										/>
									</div>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
