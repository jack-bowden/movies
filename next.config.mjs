/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
				pathname: '**',
			},
		],
	},

	// Disable Edge Runtime
	experimental: {
		runtime: 'nodejs',
	},
};

export default nextConfig;
