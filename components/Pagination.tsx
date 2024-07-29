'use client';

import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PaginationProps {
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, onPageChange }: PaginationProps) => {
	const searchParams = useSearchParams();
	const [currentPage, setCurrentPage] = useState<number | null>(null);

	useEffect(() => {
		const page = searchParams ? Number(searchParams.get('page')) || null : null;
		setCurrentPage(page);
	}, [searchParams]);

	const getPageNumbers = () => {
		const pageNumbers = [];
		const totalDisplayed = 5;
		let start = Math.max(1, (currentPage || 1) - 2);
		let end = Math.min(totalPages, start + totalDisplayed - 1);

		if (end - start + 1 < totalDisplayed) {
			start = Math.max(1, end - totalDisplayed + 1);
		}

		for (let i = start; i <= end; i++) {
			pageNumbers.push(i);
		}

		return pageNumbers;
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		onPageChange(page);
	};

	const renderPageItem = (number: number | string) => (
		<span
			key={number}
			onClick={() => typeof number === 'number' && handlePageChange(number)}
			className={`cursor-pointer text-xl ${
				currentPage === number
					? 'text-green-500 font-bold'
					: 'hover:text-gray-400'
			}`}
		>
			{number}
		</span>
	);

	const isPageActive = (number: number) =>
		(currentPage === null && number === 1) || currentPage === number;

	return (
		<div className='flex w-full items-center justify-center space-x-2 md:space-x-4 mt-4'>
			<Button
				size='sm'
				className='hidden md:inline-flex'
				disabled={currentPage === 1 || currentPage === null}
				onClick={() => handlePageChange((currentPage || 1) - 1)}
			>
				Previous
			</Button>
			<span
				className='md:hidden cursor-pointer hover:text-gray-400'
				onClick={() =>
					currentPage && currentPage > 1 && handlePageChange(currentPage - 1)
				}
			>
				{'<'}
			</span>

			<div className='hidden md:flex space-x-2'>
				{(currentPage || 1) > 4 && (
					<>
						<Button onClick={() => handlePageChange(1)}>1</Button>
						<span>...</span>
					</>
				)}

				{getPageNumbers().map(number => (
					<Button
						size='sm'
						key={number}
						onClick={() => handlePageChange(number)}
						className={isPageActive(number) ? 'bg-green-500 text-white' : ''}
					>
						{number}
					</Button>
				))}

				{(currentPage || 1) < totalPages - 4 && (
					<>
						<span>...</span>
						<Button
							size='sm'
							onClick={() => handlePageChange(totalPages)}
						>
							{totalPages}
						</Button>
					</>
				)}
			</div>

			<div className='flex md:hidden space-x-4'>
				{(currentPage || 1) > 2 && renderPageItem(1)}
				{(currentPage || 1) > 4 && renderPageItem('...')}
				{getPageNumbers().map(renderPageItem)}
				{(currentPage || 1) < totalPages - 3 && renderPageItem('...')}
				{(currentPage || 1) < totalPages && renderPageItem(totalPages)}
			</div>

			<Button
				size='sm'
				className='hidden md:inline-flex'
				disabled={currentPage === totalPages}
				onClick={() => handlePageChange((currentPage || 1) + 1)}
			>
				Next
			</Button>
			<span
				className='md:hidden cursor-pointer hover:text-gray-400'
				onClick={() =>
					currentPage !== null &&
					currentPage < totalPages &&
					handlePageChange(currentPage + 1)
				}
			>
				{'>'}
			</span>
		</div>
	);
};

export default Pagination;
