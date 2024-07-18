import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import FavoritesPageClient from './FavoritesPageClient';
import { getFavorites } from '@/hooks/getFavorites';

const FavoritesPage = async () => {
	const { userId: clerkUserId } = auth();
	const favorites = await getFavorites(clerkUserId!);

	return (
		<>
			<SignedIn>
				<FavoritesPageClient
					favorites={favorites}
					clerkUserId={clerkUserId || ''}
				/>
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</>
	);
};

export default FavoritesPage;
