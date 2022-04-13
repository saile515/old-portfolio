import "dotenv/config";

import type { NextApiRequest, NextApiResponse } from "next";

import { createTransport } from "nodemailer";

const transporter = createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

interface Data {
	email: string;
	name: string;
	tel?: string;
	companyName?: string;
	idea: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const data = req.body as Data;
	const mailOptions = {
		from: process.env.EMAIL,
		to: process.env.EMAIL,
		subject: `Potentiell kund - ${data.name}`,
		text: `Email: ${data.email}\nNamn: ${data.name}\nTel: ${data.tel}${data.companyName ? "\nFöretagsnamn: " + data.companyName : ""}\n\nIdé:\n${data.idea}`,
	};

	return new Promise((resolve, reject) => {
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				res.status(400);
				reject(400);
			} else {
				res.redirect("/");
				resolve(200);
			}
		});
	});
}
