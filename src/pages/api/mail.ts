import { EmailParams, MailerSend, Recipient, Sender } from 'mailer-send-ts';
import type { NextApiRequest, NextApiResponse } from 'next'
import { mail } from '../../services/mailerSend';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { name, email, message } = req.body


        const recipients = [
            new Recipient(email, name)
        ];

        const sentFrom = new Sender("lucascardosopsd@lucascardoso.dev", "Client Portfolio")

        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setSubject("Subject")
            .setText(message);

        mail.email.send(emailParams);

        res.status(200).json({})
    } catch (error) {
        console.log(error)
        res.status(500).json({})
    }
}