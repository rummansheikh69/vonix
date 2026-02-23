/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: [
      "res.cloudinary.com",
      "i.makeagif.com",
      "images.unsplash.com",
      "marketplace.canva.com",
      "img0-placeit-net.s3-accelerate.amazonaws.com",
    ],
  },
};

export default nextConfig;
