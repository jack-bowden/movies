'use client';

import Heading from '@/components/Heading';
import PersonCard from '@/components/PersonCard';
import { Person } from '@/types';

interface PersonPageProps {
	person: Person;
}

const PersonPageClient = ({ person }: PersonPageProps) => {
	return (
		<main className='container mx-auto px-4 py-6'>
			<div className='mb-6'>
				<div className='grid grid-cols-3 gap-4 items-center mb-6'>
					<Heading title='Person' />
				</div>
				<PersonCard media={person} />
			</div>
		</main>
	);
};

export default PersonPageClient;
