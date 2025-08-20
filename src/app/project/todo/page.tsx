"use client";

import dynamic from "next/dynamic";

const TodoListHome = dynamic(() => import("@/features/TodoListHome"), {
	ssr: true,
	loading: () => <p>Loading...</p>,
});

export default function TodoListHomePage() {
	return <TodoListHome />;
}
