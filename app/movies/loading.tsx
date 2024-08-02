'use client';

import { usePathname } from 'next/navigation';

const MoviePageSkeleton = () => {
	const pathname = usePathname();

	if (pathname === '/movies') {
		return (
			<main className='container mx-auto px-4 py-6'>
				<div className='mb-6'>
					<div className='grid grid-cols-3 gap-4 items-center'>
						<div className='h-8 bg-gray-300/40 rounded animate-pulse'></div>
						<div className='flex justify-center'>
							<div className='w-24 h-8 bg-gray-300/40 rounded animate-pulse'></div>
						</div>
						<div className='flex justify-end'>
							<div className='w-32 h-8 bg-gray-300/40 rounded animate-pulse'></div>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2'>
					{[...Array(18)].map((_, index) => (
						<div
							key={index}
							className='w-full h-56 bg-gray-300/40 rounded animate-pulse'
						></div>
					))}
				</div>
				<div className='mt-6 flex justify-center'>
					<div className='w-64 h-10 bg-gray-300/40 rounded animate-pulse'></div>
				</div>
			</main>
		);
	}
};

export default MoviePageSkeleton;
