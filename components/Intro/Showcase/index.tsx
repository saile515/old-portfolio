import Site from "./Site";

export default function Showcase() {
	return (
		<div className="w-full md:h-screen p-8 bg-gray-200 flex flex-col justify-center items-center">
			<h2 className="text-xl font-bold md:text-2xl m-4">Mitt tidigare arbete</h2>
			<div className=" grid md:grid-cols-2 gap-8">
				<Site
					imageSrc="/Matresan.jpeg"
					name="Matresan.net"
					href="https://www.matresan.net"
					description="Matresan.net är en matblogg gjord åt en klient. Sidan beskriver en familjs resa att äta varje lands nationallrätt."
				/>
				<div className="bg-gray-50 text-gray-600 w-80 h-[28rem] flex justify-center items-center p-8 rounded-lg">
					<p>Det här är fortfarande ett nytt företag, därför finns det inte jättemånga tidigare kunder. Men ditt företag kan också synas här om du köper en hemsida.</p>
				</div>
			</div>
		</div>
	);
}
