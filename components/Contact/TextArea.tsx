import { Dispatch, SetStateAction } from "react";

export default function TextArea(props: { name: string; title: string; length: number; setLength: Dispatch<SetStateAction<number>>; tip: { bad: boolean; message: string } }) {
	return (
		<div className=" col-span-2 flex flex-col relative">
			<label htmlFor={props.name}>{props.title}</label>
			<p className={` absolute right-4 ${props.tip.bad ? "text-red-500" : "text-teal-500"}`}>{props.tip.message}</p>
			<textarea
				name={props.name}
				id={props.name}
				className="h-full resize-none mt-2 p-2"
				onChange={(event) => {
					props.setLength(event.target.value.length);
				}}></textarea>
			<p className={`absolute right-4 bottom-4 ${props.length < 250 ? "text-red-500" : "text-teal-500"}`}>{props.length}</p>
		</div>
	);
}
