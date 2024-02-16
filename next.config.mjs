import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const millionConfig = {
  auto: true,
};

export default nextConfig;

// TODO: Replace default export with the following one when the issue is fixed
// https://github.com/aidenybai/million/pull/959
// export default million.next(nextConfig, millionConfig);
