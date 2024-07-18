import IndividualMediaCard from '@/components/IndividualMediaCard';
import { Cast, IndividualMedia, TMDBProps } from '@/types';

import React from 'react';

interface IndividualMoviePageClientProps {
	movie: IndividualMedia;
	cast: Cast;
	similar: TMDBProps;
}

const IndividualMoviePageClient = ({
	movie,
	cast,
	similar,
}: IndividualMoviePageClientProps) => {
	return (
		<main className='container mx-auto px-4 py-6'>
			<div className='overflow-x-auto pb-4'>
				<div className='flex space-x-4'>
					<IndividualMediaCard
						media={movie}
						cast={cast}
						similar={similar}
					/>
				</div>
			</div>
		</main>
	);
};

export default IndividualMoviePageClient;
