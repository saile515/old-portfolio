import { FormEvent, SyntheticEvent, useState } from "react";

import TextArea from "./TextArea";
import TextInput from "./TextInput";

export default function Contact() {
	const [tip, setTip] = useState<{ bad: boolean; message: string }>({ bad: false, message: "Desto mer detaljerad din beskrivning är, desto nogrannare prisestimering kan jag ge." });

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
		<div className="w-full h-screen flex flex-col items-center">
			<h2 className="text-3xl mx-40 my-12">Redo att ta ditt företag eller din idé till nästa nivå? Fyll i kontaktformuläret så hör jag av mig med en kostnadsestimering.</h2>
			<form action="/api/contact" method="post" onSubmit={handleSubmit} className="w-[60%] min-w-[40rem] grid grid-flow-row grid-cols-2 grid-rows-[4rem_4rem_20rem_2rem] gap-2">
				<TextInput type="email" name="email" title="Email" />
				<TextInput type="tel" name="tel" title="Mobilnummer" optional />
				<TextInput name="name" title="Namn" />
				<TextInput name="companyName" title="Företagsnamn" optional />
				<TextArea name="idea" title="Din idé" minLength={250} tip={tip} />
				<input type="submit" value="Skicka" className="bg-teal-500 text-gray-50 px-4" />
			</form>
		</div>
	);
}
