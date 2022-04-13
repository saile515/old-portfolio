export default function EmailInput(props: { type?: string; name: string; title: string; optional?: boolean }) {
	return (
		<div className="flex flex-col">
			<label htmlFor={props.name}>
				{props.title}
				{props.optional ? " (Frivillig)" : ""}:
			</label>
			<input type={props.type ? props.type : "text"} name={props.name} id={props.name} {...{ required: !props.optional }} className="mt-2 p-1" />
		</div>
	);
}
