/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['netlify.app', 'super-elf-132559.netlify.app'],
  },
};

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
