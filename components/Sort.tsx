'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const sortOptions = [
	'Most Popular',
	'Least Popular',
	'Highest Rated',
	'Lowest Rated',
];

interface SortProps {
	sortValue: string;
	setSortValue: React.Dispatch<React.SetStateAction<string>>;
}

const Sort = ({ sortValue, setSortValue }: SortProps) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSort = (newSortValue: string) => {
		setSortValue(newSortValue);
		const params = new URLSearchParams(searchParams);
		params.set('sort', newSortValue.toLowerCase());
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<Menu
			as='div'
			className='relative inline-block text-left'
		>
			<div>
				<MenuButton className='group inline-flex justify-center text-md sm:text-lg md:text-xl truncate bg-gradient-to-b from-gray-300 to-gray-400 text-transparent bg-clip-text hover:text-gray-500'>
					{sortValue}
					<ChevronDownIcon
						size={50}
						className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
						aria-hidden='true'
					/>
				</MenuButton>
			</div>

			<MenuItems className='absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md bg-gray-700 shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none'>
				<div className='py-1'>
					{sortOptions.map(option => (
						<MenuItem key={option}>
							{({ active }) => (
								<p
									onClick={() => handleSort(option)}
									className={`block px-4 py-2 text-sm text-gray-400 cursor-pointer transition-all ${
										active ? 'bg-gray-100' : ''
									}`}
								>
									{option}
								</p>
							)}
						</MenuItem>
					))}
				</div>
			</MenuItems>
		</Menu>
	);
};

export default Sort;
