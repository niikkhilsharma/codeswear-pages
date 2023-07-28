/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'm.media-amazon.com',
			'dummyimage.com',
			'tailwindui.com',
			'images.unsplash.com',
			'www.searchenginejournal.com',
		],
	},
};

module.exports = nextConfig;
// https://m.media-amazon.com/images/I/61xSIru3MZL._SL1500_.jpg
