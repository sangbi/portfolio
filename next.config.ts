import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: false, // StrictMode 끔
  output: "export", // 정적 사이트 export
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
  images: {
    unoptimized: true, // Pages에서 이미지 최적화 비활성화
  },
};

export default nextConfig;
