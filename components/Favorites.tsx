'use client';

import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Result } from '@/types';
import { useParams } from 'next/navigation';

interface FavoritesProps {
	favorites: Result[] | Result | undefined;
	favoriteId: number | string;
}

const Favorites = ({ favorites, favoriteId }: FavoritesProps) => {
	const params = useParams();

	let isFavorite;

	if (Array.isArray(favorites)) {
		isFavorite = favorites.some(favorite => favorite.id === favoriteId);
	} else if (favorites) {
		isFavorite = favorites.id === favoriteId;
	}

	return (
		<div className='relative group'>
			{isFavorite ? (
				<FaHeart
					onClick={() => {}}
					className='absolute top-1 right-1 z-10 text-white opacity-90 transition-all duration-200 group-hover:opacity-100 group-hover:scale-110 cursor-pointer'
					size={28}
				/>
			) : (
				<FaRegHeart
					onClick={() => {}}
					className='absolute top-1 right-1 z-10 text-white opacity-90 transition-all duration-200 group-hover:opacity-100 group-hover:scale-110 cursor-pointer'
					size={28}
				/>
			)}
		</div>
	);
};

export default Favorites;
