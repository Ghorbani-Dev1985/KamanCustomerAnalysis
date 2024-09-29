/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    devIndicators: {
        buildActivity: false
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
