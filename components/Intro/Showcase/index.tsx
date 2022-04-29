import Image from "next/image";
import Site from "./Site";

export default function Showcase() {
	return (
		<div className="w-full min-h-screen p-8 bg-gray-200 flex flex-col justify-center items-center relative">
			<h2 className="text-xl font-bold md:text-2xl m-4">Mitt tidigare arbete</h2>
			<div className=" grid md:grid-cols-2 gap-8">
				<Site
					imageSrc="/Matresan.jpeg"
					name="Matresan.net"
					href="https://www.matresan.net"
					description="Matresan.net är en matblogg gjord åt en klient. Sidan beskriver en familjs resa att äta varje lands nationallrätt."
				/>
				<div className="bg-gray-50 text-gray-600 w-80 max-w-[90vw] h-[28rem] flex justify-center items-center p-8 rounded-lg z-10">
					<p>Det här är fortfarande ett nytt företag, därför finns det inte jättemånga tidigare kunder. Men ditt företag kan också synas här om du köper en hemsida.</p>
				</div>
			</div>
			<div className=" absolute right-0 bottom-0 md:mt-[10vh] w-[80vh] h-[80vh]">
				<Image src="/Illustration_2.svg" layout="fill" alt="Dekorativ illustration" />
			</div>
		</div>
	);
}
