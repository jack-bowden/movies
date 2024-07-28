'use server';

import { toggleFavorite } from '@/hooks/getToggleFavorites';
import { Result } from '@/types';

export async function useToggleFavorite(favorite: Result, clerkUserId: string) {
	return await toggleFavorite(favorite, clerkUserId);
}
