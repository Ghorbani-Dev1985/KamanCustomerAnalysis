/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    i18n: {
        locales: ["fa", "en"],
        defaultLocale: "fa",
    },
    devIndicators: {
        buildActivity: false
    }
};

export default nextConfig;
