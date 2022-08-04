export default function EmailInput(props: { type?: string; name: string; title: string; optional?: boolean }) {
	return (
		<>
			<label htmlFor={props.name} className="my-1">
				{props.title}
				{props.optional ? " (Frivillig)" : ""}:
				<input type={props.type ? props.type : "text"} name={props.name} id={props.name} {...{ required: !props.optional }} className="my-1 p-1 w-full" />
			</label>
		</>
	);
}
