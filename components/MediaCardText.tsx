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
		</div>
	);
};

export default MediaCardText;
