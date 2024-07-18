import { getSearchResults } from '@/hooks/getSearchResults';
import SearchPageClient from './SearchPageClient';
import { auth } from '@clerk/nextjs/server';
import { getFavorites } from '@/hooks/getFavorites';

const SearchPage = async ({
	searchParams,
}: {
	searchParams: { query: string };
}) => {
	const query = searchParams?.query || '';
	const searchResults = await getSearchResults(query);
	const { userId: clerkUserId } = auth();
	const favorites = await getFavorites(clerkUserId!);

	return (
		<SearchPageClient
			searchResults={searchResults}
			query={query}
			clerkUserId={clerkUserId || ''}
			favorites={favorites}
		/>
	);
};

export default SearchPage;
