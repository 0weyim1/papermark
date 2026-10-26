import { withContentlayer } from 'next-contentlayer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  webpack: (config, { isServer }) => {
    // This tells webpack to ignore or substitute the missing Enterprise Edition dependencies
    config.resolve.alias['@/ee'] = path.resolve(__dirname, 'empty-module.js');
    
    return config;
  },
};

// We also need to create a fallback mapping for the router alias if it fails deep resolution
export default withContentlayer(nextConfig);
