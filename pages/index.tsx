import Cookies from "../components/Cookies";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { NextPage } from "next";
import Script from "next/script";
import WhatWeDo from "../components/WhatWeDo";

const Home: NextPage = () => {
	return (
		<div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen text-zinc-900 dark:text-zinc-50">
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-B3S7H53F5M"
				strategy="afterInteractive"
			/>
			<Script
				src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_KEY}`}
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-B3S7H53F5M');
                gtag('config', 'AW-10944466948');

                function gtag_report_conversion(url) {
                var callback = function () {
                    if (typeof(url) != 'undefined') {
                    window.location = url;
                    }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-10944466948/3NKBCI7M5eADEISg3eIo',
                    'event_callback': callback
                });
                return false;
                }
                `}
			</Script>
			<Head>
				<title>E.J. Webbutveckling - Prisvärda hemsidor</title>
				<meta
					name="description"
					content="E.J. Webbutveckling - Prisvärda hemsidor och webbappar. Behöver du eller ditt företag en hemsida? Kontakta mig."
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta
					property="og:image"
					content="https://www.eliasjorgensen.se/PreviewImage.png"
				/>
				<meta property="og:url" content="https://www.eliasjorgensen.se/" />
				<meta property="og:title" content="E.J. Webbutveckling - Prisvärda hemsidor" />
				<meta
					property="og:description"
					content="E.J. Webbutveckling - Prisvärda hemsidor och webbappar. Behöver du eller ditt företag en hemsida? Kontakta mig."
				/>
			</Head>
			<Navbar />
			<Header />
			<WhatWeDo />
			<Cookies />
		</div>
	);
};

export default Home;
