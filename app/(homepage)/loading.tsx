'use client';

import React from 'react';

const HomePageSkeleton = () => {
	return (
		<main className='container mx-auto px-4 py-6'>
			{/* Trending Movies Section */}
			<div className='w-full flex items-center justify-start pt-4 mb-4'>
				<div className='h-8 w-48 bg-gray-300/40 rounded animate-pulse'></div>
			</div>

			{/* Infinite Moving Cards Skeleton */}
			<div className='pt-4 sm:pt-6 mb-8'>
				<div className='rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
					<div className='flex gap-4 pb-4 overflow-hidden'>
						{[...Array(6)].map((_, index) => (
							<div
								key={index}
								className='flex-shrink-0'
							>
								<div className='w-56 h-36 md:w-96 md:h-44 bg-gray-300/40 rounded-2xl animate-pulse'></div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Popular Series Section */}
			<div className='w-full flex items-center justify-start pt-4 mb-4'>
				<div className='h-8 w-48 bg-gray-300/40 rounded animate-pulse'></div>
			</div>

			{/* Popular Series Cards Skeleton */}
			<div className='overflow-x-auto pb-4 custom-scrollbar mr-2'>
				<div className='grid grid-flow-col auto-cols-max gap-2'>
					{[...Array(8)].map((_, index) => (
						<div
							key={index}
							className='w-40 sm:w-48 h-56 bg-gray-300/40 rounded-lg animate-pulse'
						></div>
					))}
				</div>
			</div>
		</main>
	);
};

export default HomePageSkeleton;
