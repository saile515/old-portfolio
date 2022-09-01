import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import Site from "./Site";
import { useState } from "react";

export default function Showcase() {
	const [websitesVisible, setWebsitesVisible] = useState<boolean>(true);
	const [webappsVisible, setWebappsVisible] = useState<boolean>(false);
	return (
		<div className="w-full min-h-screen p-8 bg-gray-200 flex flex-col sm:justify-center items-center relative">
			<h2 className="text-xl font-bold md:text-2xl m-4 z-10">Mitt tidigare arbete</h2>
			<div className="z-10">
				<button
					className={`p-1 m-3 focus:outline-none ${websitesVisible ? "border-b-2 border-teal-500 " : "text-gray-500"}`}
					onClick={() => setWebsitesVisible(true)}>
					Hemsidor
				</button>
				<button
					className={`p-1 m-3 focus:outline-none ${webappsVisible ? "border-b-2 border-teal-500 " : "text-gray-500"}`}
					onClick={() => setWebappsVisible(true)}>
					Webbappar
				</button>
			</div>
			<div className="overflow-hidden flex justify-center z-10 relative min-w-full sm:min-w-[42rem] min-h-[28rem]">
				<CSSTransition
					in={websitesVisible}
					timeout={150}
					classNames={{
						enter: "right-full absolute",
						enterActive: "right-1/2 absolute translate-x-1/2",
						enterDone: "static",
						exit: "right-1/2 absolute translate-x-1/2",
						exitActive: "!right-[200%] absolute translate-x-1/2",
					}}
					unmountOnExit
					onEnter={() => setWebappsVisible(false)}>
					<div className="flex flex-col sm:flex-row transition-[right]">
						<Site
							imageSrc="/Matresan.jpeg"
							name="Matresan.net"
							href="https://www.matresan.net"
							description="Matresan.net är en matblogg gjord åt en klient. Sidan beskriver en familjs projekt med att tillaga varje lands nationalrätt."
						/>
						<div className="bg-gray-50 text-gray-600 w-80 max-w-[90vw] h-[28rem] flex justify-center items-center p-8 rounded-lg mx-4 z-10">
							<p>
								Det här är fortfarande ett nytt företag, därför finns det inte jättemånga tidigare kunder. Men ditt företag kan också
								synas här om du köper en hemsida.
							</p>
						</div>
					</div>
				</CSSTransition>
				<CSSTransition
					in={webappsVisible}
					timeout={150}
					classNames={{
						enter: "left-full absolute",
						enterActive: "left-1/2 absolute -translate-x-1/2",
						enterDone: "static",
						exit: "left-1/2 absolute -translate-x-1/2",
						exitActive: "!left-[200%] absolute -translate-x-1/2",
					}}
					unmountOnExit
					onEnter={() => setWebsitesVisible(false)}>
					<div className="flex flex-col sm:flex-row transition-[left]">
						<Site
							imageSrc="/Ordlist-skapare.jpeg"
							name="Ordlist-skapare.se"
							href="https://www.ordlist-skapare.se"
							description="Ordlist-skapare är en liten webbapp för att göra om text till en ordlist som sedan går att redigera."
						/>
					</div>
				</CSSTransition>
			</div>
			<div className=" absolute right-0 bottom-0 md:mt-[10vh] w-[80vh] h-[80vh]">
				<Image src="/Illustration_2.svg" layout="fill" alt="Dekorativ illustration" />
			</div>
		</div>
	);
}
