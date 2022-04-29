import Image from "next/image";

export default function Site(props: { imageSrc: string; name: string; href: string; description: string }) {
	return (
		<a href={props.href} target="_blank" rel="noreferrer">
			<div className="relative w-80 max-w-[90vw] h-[28rem] bg-gray-50 rounded-lg overflow-hidden z-10">
				<div className="relative w-full h-a">
					<Image src={props.imageSrc} layout="responsive" width={960} height={540} alt={`${props.name} skärmbild`} />
				</div>
				<h3 className="text-xl font-bold mx-4 my-2">{props.name}</h3>
				<p className="mx-4">{props.description}</p>
			</div>
		</a>
	);
}
