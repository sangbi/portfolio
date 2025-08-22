"use client";

import dynamic from "next/dynamic";

const ApiConnectionHome = dynamic(() => import("@/components/NotYetPage"), {
  ssr: true,
  loading: () => <p>Loading...</p>,
});

export default function TodoListHomePage() {
  return <ApiConnectionHome />;
}
