import PersonPageClient from './PersonPageClient';
import { getPerson } from '@/hooks/getPerson';

const IndividualMoviePage = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const person = await getPerson(id);

	return <PersonPageClient person={person} />;
};

export default IndividualMoviePage;
