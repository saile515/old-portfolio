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
	try {
		let transporter = createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				type: "OAuth2",
				user: process.env.EMAIL,
				clientId: process.env.CLIENT_ID,
				clientSecret: process.env.CLIENT_SECRET,
				refreshToken: process.env.REFRESH_TOKEN,
				accessToken: process.env.ACCESS_TOKEN,
				expires: 1484314697598,
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
	} catch (err) {
		console.log(err);
	}
}
