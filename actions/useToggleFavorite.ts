'use server';

import { toggleFavorite } from '@/hooks/getToggleFavorites';
import { Result } from '@/types';

export async function useToggleFavorite(favorite: Result, clerkUserId: string) {
	console.log('favorite:', favorite);
	console.log('clerkUserId:', clerkUserId);
	return await toggleFavorite(favorite, clerkUserId);
}
