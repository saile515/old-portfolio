import { useState } from "react";

export default function TextArea(props: { name: string; title: string; minLength?: number }) {
	const [length, setLength] = useState<number>(0);
	return (
		<>
			<label htmlFor={props.name} className="md:col-span-2 flex flex-col relative min-h-[10rem]">
				{props.title}:
				<textarea
					minLength={props.minLength}
					name={props.name}
					id={props.name}
					className="w-full h-full resize-none mt-2 p-2"
					onChange={(event) => {
						setLength(event.target.value.length);
					}}></textarea>
			</label>
		</>
	);
}
