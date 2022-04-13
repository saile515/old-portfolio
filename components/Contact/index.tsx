import { SyntheticEvent, useState } from "react";

import TextArea from "./TextArea";
import TextInput from "./TextInput";

export default function Contact() {
	const [length, setLength] = useState<number>(0);
	const [tip, setTip] = useState<{ bad: boolean; message: string }>({ bad: false, message: "Desto mer detaljerad din beskrivning är, desto nogrannare prisestimering kan jag ge." });

	function handeSubmit(event: SyntheticEvent) {
		if (length < 250) {
			event.preventDefault();
			setTip({ bad: true, message: "Fältet måste vara minst 250 bokstäver." });
		}
	}

	return (
		<div className="w-full h-screen flex flex-col items-center">
			<h2 className="text-3xl mx-40 my-12">Redo att ta ditt företag eller din idé till nästa nivå? Fyll i kontaktformuläret så hör jag av mig med en kostnadsestimering.</h2>
			<form action="/api/contact" method="post" onSubmit={handeSubmit} className="w-[60%] min-w-[40rem] grid grid-flow-row grid-cols-2 grid-rows-[4rem_4rem_20rem_2rem] gap-2">
				<TextInput type="email" name="email" title="Email" />
				<TextInput type="tel" name="tel" title="Mobilnummer" optional />
				<TextInput name="name" title="Namn" />
				<TextInput name="companyName" title="Företagsnamn" optional />
				<TextArea name="idea" title="Din idé" length={length} setLength={setLength} tip={tip} />
				<div className="col-span-2 flex justify-center">
					<input type="submit" value="Skicka" className="bg-teal-500 text-gray-50 px-4" />
				</div>
			</form>
		</div>
	);
}
