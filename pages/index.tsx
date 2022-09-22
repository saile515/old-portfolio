import Contact from "../components/Contact";
import Cookies from "../components/Cookies";
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
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-B3S7H53F5M" strategy="afterInteractive" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-B3S7H53F5M');
                gtag('config', 'AW-10944466948');

                `}
			</Script>
			<Head>
				<title>E.J. Webbutveckling - Prisvärda hemsidor</title>
				<meta
					name="description"
					content="E.J. Webbutveckling - Prisvärda hemsidor och webbappar. Behöver du eller ditt företag en hemsida? Kontakta mig."
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:image" content="https://www.eliasjorgensen.se/PreviewImage.png" />
				<meta property="og:url" content="https://www.eliasjorgensen.se/" />
				<meta property="og:title" content="E.J. Webbutveckling - Prisvärda hemsidor" />
				<meta
					property="og:description"
					content="E.J. Webbutveckling - Prisvärda hemsidor och webbappar. Behöver du eller ditt företag en hemsida? Kontakta mig."
				/>
			</Head>
			<Header />
			<Info />
			<Info2 />
			<Showcase />
			<Contact />
			<Cookies />
		</div>
	);
};

export default Home;
