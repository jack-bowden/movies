import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface MobilePaginationProps {
	totalPages: number;
	onPageChange: (page: number) => void;
}

const MobilePagination = ({
	totalPages,
	onPageChange,
}: MobilePaginationProps) => {
	const searchParams = useSearchParams();
	const [currentPage, setCurrentPage] = useState<number | null>(null);

	useEffect(() => {
		const page = searchParams ? Number(searchParams.get('page')) || null : null;
		setCurrentPage(page);
	}, [searchParams]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		onPageChange(page);
	};

	const isPageActive = (number: number) =>
		(currentPage === null && number === 1) || currentPage === number;

	const renderPageButton = (number: number) => (
		<Button
			key={number}
			onClick={() => handlePageChange(number)}
			className={`w-10 h-10 ${
				isPageActive(number) ? 'bg-green-500 text-white' : ''
			}`}
		>
			{number}
		</Button>
	);

	const renderEllipsis = () => <span className='px-2'>...</span>;

	const getVisiblePages = () => {
		const visiblePages = [];
		if (totalPages <= 5) {
			for (let i = 1; i <= totalPages; i++) {
				visiblePages.push(i);
			}
		} else {
			const currentPageNum = currentPage || 1;
			visiblePages.push(1);
			if (currentPageNum > 3) visiblePages.push(null); // ellipsis
			if (currentPageNum > 2) visiblePages.push(currentPageNum - 1);
			if (currentPageNum !== 1 && currentPageNum !== totalPages)
				visiblePages.push(currentPageNum);
			if (currentPageNum < totalPages - 1)
				visiblePages.push(currentPageNum + 1);
			if (currentPageNum < totalPages - 2) visiblePages.push(null); // ellipsis
			visiblePages.push(totalPages);
		}
		return visiblePages;
	};

	return (
		<div className='flex flex-wrap items-center justify-center gap-2 mt-4'>
			<Button
				onClick={() => handlePageChange(Math.max(1, (currentPage || 1) - 1))}
				disabled={currentPage === 1 || currentPage === null}
				className='w-10 h-10 p-0'
			>
				&lt;
			</Button>

			{getVisiblePages().map((page, index) =>
				page === null ? renderEllipsis() : renderPageButton(page)
			)}

			<Button
				onClick={() =>
					handlePageChange(Math.min(totalPages, (currentPage || 1) + 1))
				}
				disabled={currentPage === totalPages}
				className='w-10 h-10 p-0'
			>
				&gt;
			</Button>
		</div>
	);
};

export default MobilePagination;
