import { NextApiRequest, NextApiResponse } from "next";

import { createTransport } from "nodemailer";
import fetch from "node-fetch";

interface Data {
	email: string;
	name: string;
	tel?: string;
	companyName?: string;
	idea: string;
	captcha: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const data = req.body as Data;

		// Build the assessment request.
		const request = {
			event: {
				token: data.captcha,
				siteKey: process.env.NEXT_PUBLIC_CAPTCHA_KEY,
				expectedAction: "SEND_MESSAGE",
			},
		};

		console.log(request);

		const response: any = await fetch(
			`https://recaptchaenterprise.googleapis.com/v1/projects/${process.env.PROJECT_ID}/assessments?key=${process.env.API_KEY}`,
			{ method: "POST", body: JSON.stringify(request) }
		).then((res) => res.json());

		console.log(response);

		if (response.riskAnalysis.score < 0.3) return;

		// Send mail
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

		const mailOptions = {
			from: process.env.EMAIL,
			to: process.env.EMAIL,
			subject: `Potentiell kund - ${data.name}`,
			text: `Email: ${data.email}\nNamn: ${data.name}${
				data.tel ? "\nTelefon: " + data.tel : ""
			}${data.companyName ? "\nFöretagsnamn: " + data.companyName : ""}\n\nIdé:\n${
				data.idea
			}`,
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
		res.status(500);
	}
}
