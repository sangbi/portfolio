"use client";

import dynamic from "next/dynamic";

const MainHome = dynamic(() => import("../features/MainHome"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function HomePage() {
  return <MainHome />;
}
