import "dotenv/config";

import type { NextApiRequest, NextApiResponse } from "next";

import { createTransport } from "nodemailer";

interface Data {
	email: string;
	name: string;
	tel?: string;
	companyName?: string;
	idea: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
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
					res.status(400).end();
					reject(400);
				} else {
					res.status(200).end();
					resolve(200);
				}
			});
		});
	} catch (err) {
		console.log(err);
	}
}
