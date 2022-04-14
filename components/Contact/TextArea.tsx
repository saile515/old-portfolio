import { Dispatch, SetStateAction, useState } from "react";

export default function TextArea(props: { name: string; title: string; minLength: number; tip: { bad: boolean; message: string } }) {
	const [length, setLength] = useState<number>(0);
	return (
		<>
			<label htmlFor={props.name}>{props.title}</label>
			<p className={` absolute right-4 ${props.tip.bad ? "text-red-500" : "text-teal-500"}`}>{props.tip.message}</p>
			<textarea
				minLength={props.minLength}
				name={props.name}
				id={props.name}
				className="h-full resize-none mt-2 p-2"
				onChange={(event) => {
					setLength(event.target.value.length);
				}}></textarea>
			<p className={`absolute right-4 bottom-4 ${length < props.minLength ? "text-red-500" : "text-teal-500"}`}>{length}</p>
		</>
	);
}
