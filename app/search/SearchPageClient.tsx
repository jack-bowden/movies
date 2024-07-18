import MediaCard from '@/components/MediaCard';
import { useCapitalizeQuery } from '@/lib/useCapitalizeQuery';
import { Result, TMDBProps } from '@/types';

interface SearchProps {
	searchResults?: TMDBProps;
	query?: string;
	clerkUserId?: string;
	favorites: Result[] | Result | undefined;
}

const SearchPage = ({
	searchResults,
	query,
	clerkUserId,
	favorites,
}: SearchProps) => {
	// TODO Create a variable to get the search results

	return (
		<main className='container mx-auto px-4 py-6'>
			{!query && (
				<div className='w-full h-full justify-center items-center'>
					<h1 className='text-md sm:text-lg md:text-xl truncate'>
						No results found! Please enter a move or TV show in the seach bar.
					</h1>
				</div>
			)}
			<div className='mb-6'>
				<p className='text-lg sm:text-xl bg-gradient-to-b from-gray-300 to-gray-400 text-transparent bg-clip-text'>
					{useCapitalizeQuery(query ? query : '')}
				</p>
			</div>
			<div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4'>
				<MediaCard
					media={searchResults ? searchResults : []}
					layout='grid'
					clerkUserId={clerkUserId || ''}
					favorites={favorites}
				/>
			</div>
		</main>
	);
};

export default SearchPage;
