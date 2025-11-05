"use client";

import dynamic from "next/dynamic";

const GridHome = dynamic(() => import("@/features/GridHome"), {
	// const ApiConnectionHome = dynamic(() => import("@/components/NotYetPage"), {
	ssr: true,
	loading: () => <p>Loading...</p>,
});

export default function TodoListHomePage() {
	return <GridHome />;
}
