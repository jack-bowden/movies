import { Button } from '@/components/ui/button';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) => {
	const getPageNumbers = () => {
		const pageNumbers = [];
		const totalDisplayed = 5;
		let start = Math.max(1, currentPage - 2);
		let end = Math.min(totalPages, start + totalDisplayed - 1);

		if (end - start + 1 < totalDisplayed) {
			start = Math.max(1, end - totalDisplayed + 1);
		}

		for (let i = start; i <= end; i++) {
			pageNumbers.push(i);
		}

		return pageNumbers;
	};

	const renderPageItem = (number: number | string) => (
		<span
			key={number}
			onClick={() => typeof number === 'number' && onPageChange(number)}
			className={`cursor-pointer text-xl ${
				currentPage === number
					? 'text-green-500 font-bold'
					: 'hover:text-gray-400'
			}`}
		>
			{number}
		</span>
	);

	return (
		<div className='flex w-full items-center justify-center space-x-2 md:space-x-4 mt-4'>
			<Button
				className='hidden md:inline-flex'
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				Previous
			</Button>
			<span
				className='md:hidden cursor-pointer hover:text-gray-400'
				onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
			>
				{'<'}
			</span>

			<div className='hidden md:flex space-x-2'>
				{currentPage > 4 && (
					<>
						<Button onClick={() => onPageChange(1)}>1</Button>
						<span>...</span>
					</>
				)}

				{getPageNumbers().map(number => (
					<Button
						key={number}
						onClick={() => onPageChange(number)}
						className={currentPage === number ? 'bg-green-500 text-white' : ''}
					>
						{number}
					</Button>
				))}

				{currentPage < totalPages - 4 && (
					<>
						<span>...</span>
						<Button onClick={() => onPageChange(totalPages)}>
							{totalPages}
						</Button>
					</>
				)}
			</div>

			<div className='flex md:hidden space-x-4'>
				{currentPage > 2 && renderPageItem(1)}
				{currentPage > 4 && renderPageItem('...')}
				{getPageNumbers().map(renderPageItem)}
				{currentPage < totalPages - 3 && renderPageItem('...')}
				{currentPage < totalPages && renderPageItem(totalPages)}
			</div>

			<Button
				className='hidden md:inline-flex'
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				Next
			</Button>
			<span
				className='md:hidden cursor-pointer hover:text-gray-400'
				onClick={() =>
					currentPage < totalPages && onPageChange(currentPage + 1)
				}
			>
				{'>'}
			</span>
		</div>
	);
};

export default Pagination;
