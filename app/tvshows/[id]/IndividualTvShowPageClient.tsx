import IndividualMediaCard from '@/components/IndividualMediaCard';
import { Cast, IndividualMedia, TMDBProps } from '@/types';

interface IndividualTvShowPageClientProps {
	tvshow: IndividualMedia;
	cast: Cast;
	similar: TMDBProps;
}

const IndividualTvShowPageClient = ({
	tvshow,
	cast,
	similar,
}: IndividualTvShowPageClientProps) => {
	return (
		<main className='container mx-auto px-4 py-6'>
			<div className='overflow-x-auto pb-4'>
				<div className='flex space-x-4'>
					<IndividualMediaCard
						media={tvshow}
						cast={cast}
						similar={similar}
					/>
				</div>
			</div>
		</main>
	);
};

export default IndividualTvShowPageClient;
