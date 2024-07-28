import { Result } from '@/types';
import prisma from '@/lib/prismadb';
import { revalidatePath } from 'next/cache';

export async function toggleFavorite(
	favorite: Result,
	clerkUserId: string | undefined
) {
	const { id, ...rest } = favorite;

	if (!clerkUserId || id === undefined) {
		return null;
	}

	const favoriteId = typeof id === 'string' ? parseFloat(id) : id;

	try {
		await prisma.user.upsert({
			where: { clerkUserId },
			create: { clerkUserId },
			update: {},
		});

		const existingFavorite = await prisma.favorite.findUnique({
			where: {
				clerkUserId_favoriteId: {
					clerkUserId,
					favoriteId,
				},
			},
		});

		if (existingFavorite) {
			const deletedFavorite = await prisma.favorite.delete({
				where: {
					id: existingFavorite.id,
				},
			});
			revalidatePath('/');
			return deletedFavorite;
		} else {
			const createdFavorite = await prisma.favorite.create({
				data: {
					id: id.toString(),
					favoriteId: Number(id),
					clerkUserId: clerkUserId,
					backdrop_path: rest.backdrop_path,
					title: rest.title ?? null,
					name: rest.name ?? null,
					poster_path: rest.poster_path,
					release_date: rest.release_date ?? null,
					first_air_date: rest.first_air_date ?? null,
					vote_average: rest.vote_average,
					vote_count: rest.vote_count,
					original_title: rest.original_title ?? null,
					media_type: rest.media_type ?? null,
					adult: rest.adult ?? null,
				},
			});
			revalidatePath('/');
			return createdFavorite;
		}
	} catch (error: any) {
		console.error('Error in toggleFavoriteStatus:', error);
		throw new Error('Failed to toggle favorite status');
	}
}
