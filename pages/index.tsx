import Contact from "../components/Contact";
import Head from "next/head";
import Header from "../components/Intro/Header";
import Info from "../components/Intro/Info";
import Info2 from "../components/Intro/Info2";
import { NextPage } from "next";
import Script from "next/script";
import Showcase from "../components/Intro/Showcase";

const Home: NextPage = () => {
	return (
		<div className="bg-gray-100 flex flex-col m-0">
			<Script src="https://www.googletagmanager.com/gtag/js?id=UA-233774066-1" strategy="afterInteractive" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-233774066-1');
                gtag('config', 'AW-10944466948');

                `}
			</Script>
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
