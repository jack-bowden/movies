import {
	getIndividualTvShow,
	getTvShowCast,
	getTvShowSimilar,
} from '@/hooks/getIndividualTvShow';
import IndividualTvShowPageClient from './IndividualTvShowPageClient';

const IndividualMoviePage = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const tvshow = await getIndividualTvShow(id);
	const cast = await getTvShowCast(id);
	const similar = await getTvShowSimilar(id);

	return (
		<IndividualTvShowPageClient
			tvshow={tvshow}
			cast={cast}
			similar={similar}
		/>
	);
};

export default IndividualMoviePage;
