'use client';

import StarRatings from 'react-star-ratings';

export interface StarRatingsProps {
	rating?: number;
	dimension?: string;
}

export default function StarRating({ rating, dimension }: StarRatingsProps) {
	return (
		<div>
			<StarRatings
				rating={rating}
				numberOfStars={10}
				name='rating'
				starSpacing={'2px'}
				starDimension={dimension || '20px'}
				starRatedColor='#22c55e'
				starEmptyColor='#5c5c5c'
			/>
		</div>
	);
}
