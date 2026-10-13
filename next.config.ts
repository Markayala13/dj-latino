import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export → produces an `out/` folder ready for Hostinger (shared hosting).
  output: "export",
  // No image optimization server on static hosting, so serve images as-is.
  images: {
    unoptimized: true,
  },
  // Serve pages as folder/index.html (friendlier for Apache static hosting).
  trailingSlash: true,
};

export default nextConfig;
