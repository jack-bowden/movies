import React from 'react';

const Heading = ({ title }: { title: string }) => {
	return (
		<p className='text-md sm:text-lg md:text-xl truncate bg-gradient-to-b from-gray-300 to-gray-400 text-transparent bg-clip-text'>
			{title}
		</p>
	);
};

export default Heading;
