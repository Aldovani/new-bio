/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // domains: ["github.com", "images2.imgbox.com", "thumbs2.imgbox.com", "*"],
  },
};

module.exports = nextConfig;
