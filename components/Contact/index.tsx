import { FormEvent, SyntheticEvent, useState } from "react";

import TextArea from "./TextArea";
import TextInput from "./TextInput";

export default function Contact() {
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = event.target as any;
		const data = {
			email: formData.email.value,
			tel: formData.tel.value,
			name: formData.name.value,
			companyName: formData.companyName.value,
			idea: formData.idea.value,
		};

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};

		fetch("/api/contact", options);
	}

	return (
		<div className="grid md:grid-cols-[1fr_60%] w-full min-h-screen">
			<div className="m-10">
				<h2 className="text-xl font-bold md:text-2xl m-2 text-center">Redo att ta ditt företag eller din idé till nästa nivå?</h2>
				<p>Fyll i formuläret med information om hur du vill att din sida ska se ut, och vilka funktioner den ska ha. Saker som är bra att inkludera är:</p>
				<br />
				<ul className="list-disc ml-8">
					<li>Om du ska sälja saker eller ta betalt på sidan.</li>
					<li>Hur många undersidor sidan ska ha.</li>
					<li>Vad sidan ska innehålla.</li>
					<li>Om sidan behöver en Backend (om du inte vet vad detta betyder räcker det med att förklara sidans huvudsyfte).</li>
				</ul>
				<br />
				<p>Jag försöker återkomma med ett prisförslag så fort jag kan. Desto nogrannnare du besktiver din idé, desto nogrannare kommer prisförslaget vara.</p>
				<br />
				<p>
					Jag kan även nås på <a href="mailto:elias.jorgensen2006@gmail.com">elias.jorgensen2006@gmail.com</a>
				</p>
			</div>
			<form
				action="/api/contact"
				method="post"
				onSubmit={handleSubmit}
				className="m-10 grid grid-flow-row grid-cols-1 md:grid-cols-2 grid-rows-[4rem_4rem_4rem_4rem_1fr_2rem] md:grid-rows-[4rem_4rem_1fr_2rem] gap-2">
				<TextInput type="email" name="email" title="Email" />
				<TextInput type="tel" name="tel" title="Mobilnummer" optional />
				<TextInput name="name" title="Namn" />
				<TextInput name="companyName" title="Företagsnamn" optional />
				<TextArea name="idea" title="Din idé" />
				<label htmlFor="submit" className="flex justify-center md:col-span-2">
					<input type="submit" name="submit" value="Skicka" className="bg-teal-500 text-gray-50 px-4 w-32" />
				</label>
			</form>
		</div>
	);
}
