'use client';

const IndividualMoviePageClientSkeleton = () => {
	return (
		<main className='container mx-auto px-4 py-6'>
			<div className='overflow-x-auto pb-4'>
				<div className='flex space-x-4'>
					<IndividualMediaCardSkeleton />
				</div>
			</div>
		</main>
	);
};

const IndividualMediaCardSkeleton = () => {
	return (
		<div className='w-full space-y-6 relative h-full'>
			<div className='w-full mb-6'>
				<div className='flex justify-start'>
					<div className='h-8 bg-gray-300/40 rounded animate-pulse w-1/2'></div>
				</div>
			</div>
			<div className='relative w-full h-96 bg-gray-300/40 rounded-lg animate-pulse'></div>
			<div className='relative w-full p-4'>
				<div className='w-full grid grid-cols-2 gap-y-2'>
					<div className='space-y-2'>
						{[...Array(4)].map((_, index) => (
							<div
								key={index}
								className='h-6 bg-gray-300/40 rounded animate-pulse'
							></div>
						))}
					</div>
					<div className='space-y-2 flex flex-col justify-end md:items-end'>
						{[...Array(4)].map((_, index) => (
							<div
								key={index}
								className='h-6 bg-gray-300/40 rounded animate-pulse'
							></div>
						))}
					</div>
				</div>
			</div>
			<div className='relative z-10 mt-6'>
				<div className='flex justify-start items-center truncate mb-6'>
					<div className='w-24 h-6 bg-gray-300/40 rounded animate-pulse'></div>
				</div>
			</div>
			<div className='mb-6'>
				<div className='h-6 bg-gray-300/40 rounded animate-pulse w-1/4'></div>
			</div>
			<div className='overflow-x-auto custom-scrollbar pb-4'>
				<div className='flex space-x-4'>
					{[...Array(5)].map((_, index) => (
						<div
							key={index}
							className='w-32 h-40 bg-gray-300/40 rounded animate-pulse'
						></div>
					))}
				</div>
			</div>
			<div className='mb-6'>
				<div className='h-6 bg-gray-300/40 rounded animate-pulse w-1/4'></div>
			</div>
			<div className='overflow-x-auto custom-scrollbar pb-4'>
				<div className='flex space-x-4'>
					{[...Array(5)].map((_, index) => (
						<div
							key={index}
							className='w-32 h-40 bg-gray-300/40 rounded animate-pulse'
						></div>
					))}
				</div>
			</div>
		</div>
	);
};

export default IndividualMoviePageClientSkeleton;
