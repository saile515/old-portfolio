import Site from "./Site";

export default function Showcase() {
	return (
		<div className="w-full h-screen bg-gray-300 flex justify-center items-center">
			<div className=" grid grid-cols-2 gap-8">
				<Site
					imageSrc="/Matresan.jpeg"
					name="Matresan.net"
					href="https://www.matresan.net"
					description="Matresan.net är en matblogg gjord åt en klient. Sidan beskriver en familjs resa att äta varje lands nationallrätt."
				/>
				<div className="bg-gray-100 text-gray-600 w-80 h-[28rem] flex justify-center items-center p-8 rounded-lg">
					<p>Det här är fortfarande ett nytt företag, därför finns det inte jättemånga tidigare kunder. Men ditt företag kan också synas här om du köper en hemsida.</p>
				</div>
			</div>
		</div>
	);
}
