'use client';

import Heading from '@/components/Heading';
import MediaCard from '@/components/MediaCard';
import Pagination from '@/components/Pagination';
import Sort from '@/components/Sort';
import { Button } from '@/components/ui/button';
import { Result, TMDBProps } from '@/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface TvShowsPageProps {
	tvshows: TMDBProps;
	clerkUserId?: string;
	favorites: Result[] | Result | undefined;
}

const TvShowsPageClient = ({
	tvshows,
	clerkUserId,
	favorites,
}: TvShowsPageProps) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const [currentPage, setCurrentPage] = useState(1);
	const [sortValue, setSortValue] = useState('Most Popular');

	const handleResetFilters = () => {
		replace(`/tvshows`);
		setCurrentPage(1);
		setSortValue('Most Popular');
	};

	const handlePageChange = (page: number) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', page.toString());
		replace(`${pathname}?${params.toString()}`);
		setCurrentPage(page);
	};

	// TODO Create a handle toggle favorites function, if needed

	return (
		<main className='container mx-auto px-4 py-6'>
			<div className='mb-6'>
				<div className='grid grid-cols-3 gap-4 items-center'>
					<Heading title='TV Shows' />
					<div className='flex justify-center'>
						<Button
							onClick={handleResetFilters}
							size='sm'
						>
							Reset Filters
						</Button>
					</div>
					<div className='flex justify-end'>
						<Sort
							sortValue={sortValue}
							setSortValue={setSortValue}
						/>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4'>
				<MediaCard
					media={tvshows}
					layout='grid'
					clerkUserId={clerkUserId || ''}
					favorites={favorites}
				/>
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={tvshows.total_pages}
				onPageChange={handlePageChange}
			/>
		</main>
	);
};

export default TvShowsPageClient;
