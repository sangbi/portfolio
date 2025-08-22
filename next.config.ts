import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // StrictMode 끔
  images: {
    unoptimized: true, // Pages에서 이미지 최적화 비활성화
  },
};

export default nextConfig;
