import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // StrictMode 끔
  output: "export", // 정적 사이트 export
  basePath: "/portfolio", // GitHub 저장소 이름과 맞춤
  images: {
    unoptimized: true, // Pages에서 이미지 최적화 비활성화
  },
};

export default nextConfig;
