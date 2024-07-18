'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Search = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		setSearchValue('');
	}, [pathname]);

	useEffect(() => {
		const query = searchParams.get('query');
		if (query) {
			setSearchValue(query);
		}
	}, [searchParams]);

	const handleSearch = (query: string) => {
		setSearchValue(query);
		const params = new URLSearchParams(searchParams);

		if (query) {
			params.set('query', query);
		} else {
			params.delete('query');
		}

		replace(`/search?${params.toString()}`);
	};

	return (
		<div className='relative md:w-full'>
			<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
				<MagnifyingGlassIcon
					className='h-5 w-5 text-gray-400'
					aria-hidden='true'
				/>
			</div>
			<input
				id='search'
				name='search'
				value={searchValue}
				onChange={e => handleSearch(e.target.value)}
				className='block w-full md:w-2/3 lg:w-[500px] rounded-md bg-gray-700 py-1.5 pl-10 pr-10 text-gray-400 placeholder:text-gray-400 border-2 border-transparent focus:border-2 focus:border-green-500 outline-none sm:text-sm sm:leading-6'
				placeholder='Search'
				type='search'
				style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
			/>
		</div>
	);
};

export default Search;
