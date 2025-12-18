/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for static site generation
  output: "export",

  // Ensures next/image works with static export
  images: {
    unoptimized: true,
  },

  // Recommended for static hosting (GitHub Pages, S3, Apache, Nginx)
  trailingSlash: true,

  // Disable server-only features explicitly
  experimental: {
    serverActions: false,
  },
};

export default nextConfig;
