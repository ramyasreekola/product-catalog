/** @type {import('next').NextConfig} */
export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "staging-api.etonshirts.com",
      },
    ],
  },
};
