/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
	env: {
		NEXT_BACKEND_URL: process.env.NEXT_BACKEND_URL,
	}
};