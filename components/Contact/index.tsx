import { FormEvent, useRef, useState } from "react";

import TextArea from "./TextArea";
import TextInput from "./TextInput";

declare var gtag_report_conversion: any;
declare var grecaptcha: any;

function ContactForm() {
	const [submitted, setSubmitted] = useState<boolean>(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const token = await new Promise((resolve, reject) => {
			grecaptcha.enterprise.ready(async () => {
				resolve(
					await grecaptcha.enterprise.execute(process.env.NEXT_PUBLIC_CAPTCHA_KEY, {
						action: "SEND_MESSAGE",
					})
				);
			});
		});

		const formData = event.target as any;
		const data = {
			email: formData.email.value,
			tel: formData.tel.value,
			name: formData.name.value,
			companyName: formData.companyName.value,
			idea: formData.idea.value,
			captcha: token,
		};

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};

		const res = await fetch("/api/contact", options);

		setSubmitted(true);

		if (res.status != 200) {
			alert("Ett fel uppstod med formuläret, vänligen försök igen senare.");
			setSubmitted(false);
		}

		gtag_report_conversion() as any;
	}

	if (!submitted)
		return (
			<form
				action="/api/contact"
				method="post"
				onSubmit={handleSubmit}
				className="m-10 flex flex-col">
				<TextInput name="name" title="Namn" />
				<TextInput type="email" name="email" title="Email" />
				<TextInput type="tel" name="tel" title="Mobilnummer" optional />
				<TextInput name="companyName" title="Företagsnamn" optional />
				<TextArea name="idea" title="Din idé" />
				<label htmlFor="submit" className="flex justify-center">
					<input
						type="submit"
						name="submit"
						value="Skicka"
						className="bg-teal-500 text-gray-50 px-4 py-1 w-32"
					/>
				</label>
			</form>
		);

	return (
		<div className="flex justify-center items-center m-4">
			<p className="text-xl sm:text-2xl font-bold text-center">
				Tack för intresset! Jag hör av mig så fort som möjligt.
			</p>
		</div>
	);
}

export default function Contact() {
	return (
		<div className="grid md:grid-cols-[1fr_1fr] w-full min-h-screen">
			<div className="flex flex-col justify-center items-center">
				<div className="m-6 sm:m-0 sm:w-[40rem] max-w-[80%]">
					<h2 className="text-xl font-bold md:text-2xl m-2 text-center">
						Redo att ta ditt företag eller din idé till nästa nivå?
					</h2>
					<p>
						Fyll i formuläret med information om hur du vill att din sida ska se ut, och
						vilka funktioner den ska ha. Saker som är bra att inkludera är:
					</p>
					<br />
					<ul className="list-disc ml-8">
						<li>Om du ska sälja saker eller ta betalt på sidan.</li>
						<li>Hur många undersidor sidan ska ha.</li>
						<li>Vad sidan ska innehålla.</li>
						<li>
							Om sidan behöver en backend (om du inte vet vad detta betyder räcker det
							med att förklara sidans huvudsyfte).
						</li>
					</ul>
					<br />
					<p>
						Jag försöker återkomma med ett prisförslag så fort jag kan. Desto
						noggrannare du beskriver din idé, desto nogrannare kommer prisförslaget
						vara.
					</p>
					<br />
					<p>
						Jag kan även nås på{" "}
						<a href="mailto:elias.jorgensen2006@gmail.com">
							elias.jorgensen2006@gmail.com
						</a>
					</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center">
				<ContactForm />
				<span className="text-xs w-80 text-gray-400">
					This site is protected by reCAPTCHA and the Google{" "}
					<a href="https://policies.google.com/privacy" className="text-blue-400">
						Privacy Policy
					</a>{" "}
					and{" "}
					<a href="https://policies.google.com/terms" className="text-blue-400">
						Terms of Service
					</a>{" "}
					apply.
				</span>
			</div>
		</div>
	);
}
