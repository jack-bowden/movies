/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	// Existing image configuration
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
				pathname: '**',
			},
		],
	},

	// Enable Edge Runtime for middleware
	experimental: {
		middleware: true,
	},

	// Configure middleware matcher
	// This applies middleware to all routes
	// Adjust if you want to limit it to specific routes
	middleware: {
		matcher: '/:path*',
	},
};

export default nextConfig;
