import { NextApiRequest, NextApiResponse } from "next";

import { createTransport } from "nodemailer";

interface Data {
	email: string;
	name: string;
	tel?: string;
	companyName?: string;
	idea: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const transporter = createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	const data = req.body as Data;
	const mailOptions = {
		from: process.env.EMAIL,
		to: process.env.EMAIL,
		subject: `Potentiell kund - ${data.name}`,
		text: `Email: ${data.email}\nNamn: ${data.name}${data.tel ? "\nTelefon: " + data.tel : ""}${data.companyName ? "\nFöretagsnamn: " + data.companyName : ""}\n\nIdé:\n${data.idea}`,
	};

	return new Promise((resolve, reject) => {
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				res.status(400).json({ message: "Error" });
				reject({ message: "Error" });
			} else {
				res.status(200).json({ message: "Success!" });
				resolve({ message: "Success!" });
			}
		});
	});
}
