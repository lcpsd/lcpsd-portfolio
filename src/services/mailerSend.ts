import { MailerSend } from "mailer-send-ts"
export const mail = new MailerSend({
    apiKey: process.env.MAILERSENDER_SECRET || ""
})