import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
};

const millionConfig = {
  auto: true,
};

export default nextConfig;

// TODO: Replace default export with the following one when the issue is fixed
// https://github.com/aidenybai/million/pull/959
// export default million.next(nextConfig, millionConfig);
