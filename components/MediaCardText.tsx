interface MediaCardTextProps {
	title: string | number | null | undefined;
	description?: string | number | null | undefined;
}

const MediaCardText = ({ title, description }: MediaCardTextProps) => {
	return (
		<div>
			<p className='text-lg sm:text-xl bg-gradient-to-b from-gray-300 to-gray-400 text-transparent bg-clip-text'>
				{title} {description && <>:&nbsp;{description}</>}
			</p>

			{/* <p className='text-lg mt-6 sm:text-xl bg-gradient-to-b from-green-500 to-green-400 text-transparent bg-clip-text'>
				{description}
			</p> */}
		</div>
	);
};

export default MediaCardText;
