'use client';

import { Person } from '@/types';
import Image from 'next/image';

interface PersonCardProps {
	media: Person;
}

const PersonCard = ({ media }: PersonCardProps) => {
	return (
		<>
			<div
				key={media.id}
				className='relative rounded-lg size-1/2 lg:size-1/4 overflow-hidden hover:shadow-md hover:shadow-green-500 transition-all'
				style={{ aspectRatio: '2/3' }}
			>
				<div className='relative w-full h-full'>
					<Image
						src={`https://image.tmdb.org/t/p/w500${media.profile_path}`}
						alt={media.name || 'Image'}
						fill
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 transition-opacity duration-300'>
						<div className='absolute bottom-0 left-0 right-0 p-4'>
							<h3 className='text-white text-md md:text-lg font-bold line-clamp-2'>
								{media.name}
							</h3>
							<p className='text-gray-300 font-semibold text-sm md:text-md mt-1'>
								{media.birthday}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonCard;
