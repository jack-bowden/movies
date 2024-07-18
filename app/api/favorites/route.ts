import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import { auth } from '@clerk/nextjs/server';

export async function GET(request: NextRequest) {
	try {
		const { userId } = auth();

		if (!userId) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		const favorites = await prisma.favorite.findMany({
			where: {
				clerkUserId: userId,
			},
		});

		return NextResponse.json(favorites);
	} catch (error) {
		console.error('Error fetching favorites:', error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
