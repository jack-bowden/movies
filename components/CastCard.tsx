'use client';

import { Cast } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface CastCardProps {
	media: Cast;
	layout: 'grid' | 'scroll';
}

const CastCard = ({ media, layout }: CastCardProps) => {
	return (
		<>
			{media.cast.map(
				item =>
					item.profile_path && (
						<div
							key={item.id}
							className={`relative rounded-lg overflow-hidden hover:shadow-md hover:shadow-green-500 transition-all ${
								layout === 'grid'
									? 'w-full'
									: 'w-32 sm:w-40 md:w-44 flex-shrink-0'
							}`}
							style={{ aspectRatio: '2/3' }}
						>
							<Link href={`/person/${item.id}`}>
								<div className='relative w-full h-full'>
									<Image
										src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
										alt={item.name || 'Image'}
										fill
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'>
										<div className='absolute bottom-0 left-0 right-0 p-4'>
											<h3 className='text-white text-sm font-semibold line-clamp-2'>
												{item.name}
											</h3>
											<p className='text-gray-300 text-xs mt-1'>
												{item.character}
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

export default CastCard;
