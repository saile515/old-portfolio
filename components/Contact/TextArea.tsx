import { useState } from "react";

export default function TextArea(props: { name: string; title: string; minLength?: number }) {
	const [length, setLength] = useState<number>(0);
	return (
		<>
			<label htmlFor={props.name} className="flex flex-col relative min-h-[10rem] my-1">
				{props.title}:
				<textarea
					minLength={props.minLength}
					name={props.name}
					id={props.name}
					className="w-full h-full resize-none p-2 my-1"
					onChange={(event) => {
						setLength(event.target.value.length);
					}}></textarea>
			</label>
		</>
	);
}
