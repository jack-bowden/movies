import { getFavorites } from '@/hooks/getFavorites';

export async function getFavoritesAction(clerkUserId: string | undefined) {
	const favorites = await getFavorites(clerkUserId);

	if (!favorites) {
		return [];
	}

	return favorites;
}
