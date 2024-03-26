/** @type {import('next').NextConfig} */
import pwa from "next-pwa";
const withPWA = pwa({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  // next config
});
export default nextConfig;
