import { MouseEvent, ReactNode } from "react";

export default function Button(props: { children?: ReactNode; onClick: (event: MouseEvent) => void }) {
	return (
		<button
			onClick={(event) => props.onClick(event)}
			className="relative min-h-2 min-w-4 bg-teal-500 text-teal-100 px-4 py-1 my-2 transition-[bottom,right,box-shadow] bottom-0 right-0 hover:bottom-[2px] hover:right-[2px] hover:shadow-[2px_2px_0_0_#115e59]">
			{props.children}
		</button>
	);
}
