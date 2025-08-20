"use client";

import dynamic from "next/dynamic";

const ResumeHome = dynamic(() => import("@/features/ResumeHome"), {
	ssr: true,
	loading: () => <p>Loading...</p>,
});

export default function HomePage() {
	return <ResumeHome />;
}
