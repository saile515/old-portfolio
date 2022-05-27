import Contact from "../components/Contact";
import Head from "next/head";
import Header from "../components/Intro/Header";
import Info from "../components/Intro/Info";
import Info2 from "../components/Intro/Info2";
import { NextPage } from "next";
import Showcase from "../components/Intro/Showcase";

const Home: NextPage = () => {
	return (
		<div className="bg-gray-100 flex flex-col m-0">
			<Head>
				<title>Elias Jörgensen</title>
				<meta name="description" content="E.J. Webbutveckling - Ta ditt företag till nästa nivå med en hemsida." />
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:image" content="https://www.eliasjorgensen.se/PreviewImage.png" />
				<meta property="og:url" content="https://www.eliasjorgensen.se/" />
				<meta property="og:title" content="Elias Jörgensen - Fullstack utvecklare" />
			</Head>
			<Header />
			<Info />
			<Info2 />
			<Showcase />
			<Contact />
		</div>
	);
};

export default Home;
