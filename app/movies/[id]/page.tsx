import {
	getMovieCast,
	getIndividualMovie,
	getMovieSimilar,
} from '@/hooks/getIndividualMovie';
import IndividualMoviePageClient from './IndividualMoviePageClient';

const IndividualMoviePage = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const movie = await getIndividualMovie(id);
	const cast = await getMovieCast(id);
	const similar = await getMovieSimilar(id);

	return (
		<IndividualMoviePageClient
			movie={movie}
			cast={cast}
			similar={similar}
		/>
	);
};

export default IndividualMoviePage;
