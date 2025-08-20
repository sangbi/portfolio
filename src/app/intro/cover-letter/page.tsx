"use client";

import dynamic from "next/dynamic";

const CoverLetterHome = dynamic(() => import("@/features/CoverLetterHome"), {
	ssr: true,
	loading: () => <p>Loading...</p>,
});

export default function HomePage() {
	return <CoverLetterHome />;
}
