'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import MediaCard from '@/components/MediaCard';
import { Button } from '@/components/ui/button';
import { Result } from '@/types';
import Heading from '@/components/Heading';
import { useToggleFavorite } from '@/actions/useToggleFavorite';

interface FavoritePageProps {
	favorites: Result[];
	clerkUserId?: string;
}

const FavoritesPageClient = ({ favorites, clerkUserId }: FavoritePageProps) => {
	const [localFavorites, setLocalFavorites] = useState<Result[]>([]);
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const { replace } = useRouter();
	const [loadValue, setLoadValue] = useState(20);

	const handleLoadMore = useCallback(() => {
		setLoadValue(prevValue => prevValue + 20);
	}, []);

	useEffect(() => {
		// Update localFavorites when favorites prop changes
		setLocalFavorites(favorites);
	}, [favorites]);

	return (
		<main className='container mx-auto px-4 py-6'>
			<div className='mb-6'>
				<div className='grid grid-cols-3 gap-4 items-center'>
					<Heading title='Favorites' />
				</div>
			</div>
			<div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4'>
				<MediaCard
					media={favorites}
					layout='grid'
					favorites={favorites}
					clerkUserId={clerkUserId || ''}
				/>
			</div>
			{favorites.length > loadValue && (
				<div className='w-full justify-center items-center flex pt-6'>
					<Button onClick={handleLoadMore}>Load more</Button>
				</div>
			)}
		</main>
	);
};

export default FavoritesPageClient;
