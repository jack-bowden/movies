import prisma from '@/lib/prismadb';
import { Result } from '@/types';

export async function getFavorites(
	clerkUserId: string | undefined
): Promise<Result[]> {
	if (!clerkUserId) {
		return [];
	}
	const favorites = await prisma.favorite.findMany({
		where: {
			clerkUserId,
		},
	});

	return favorites;
}
