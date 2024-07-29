'use client';

import getAllMoviesAction from '@/actions/getAllMoviesAction';
import Heading from '@/components/Heading';
import MediaCard from '@/components/MediaCard';
import MobilePagination from '@/components/MobilePagination';
import Pagination from '@/components/Pagination';
import Sort from '@/components/Sort';
import { Button } from '@/components/ui/button';
import { Result, TMDBProps } from '@/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface MoviePageProps {
	movies: TMDBProps;
	clerkUserId?: string;
	favorites: Result[] | Result | undefined;
}

const MoviesPageClient = ({
	movies,
	clerkUserId,
	favorites,
}: MoviePageProps) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const [currentPage, setCurrentPage] = useState(1);
	const [sortValue, setSortValue] = useState('Most Popular');

	const handleResetFilters = () => {
		getAllMoviesAction('most popular', 1);
		replace(`/movies`);
		setCurrentPage(1);
		setSortValue('Most Popular');
	};

	const handlePageChange = (page: number) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', page.toString());
		replace(`${pathname}?${params.toString()}`);
		setCurrentPage(page);
	};

	return (
		<main className='container mx-auto px-4 py-6'>
			<div className='mb-6'>
				<div className='grid grid-cols-3 gap-4 items-center'>
					<Heading title='Movies' />
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
					media={movies}
					layout='grid'
					clerkUserId={clerkUserId || ''}
					favorites={favorites}
				/>
			</div>
			<div className='hidden md:block'>
				<Pagination
					totalPages={movies.total_pages}
					onPageChange={handlePageChange}
				/>
			</div>
			<div className='block md:hidden'>
				<MobilePagination
					totalPages={movies.total_pages}
					onPageChange={handlePageChange}
				/>
			</div>
		</main>
	);
};

export default MoviesPageClient;
