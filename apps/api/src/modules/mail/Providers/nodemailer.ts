import * as nodemailer from "nodemailer";
import { mailOptions } from "./mailOptions.interface";

// nodemailer strategy where all logic for sending email via nodemailer is implemented.
export class NodemailerStrategy implements mailOptions {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "mail.spacemail.com",
            port: 465, // Usually 587 for TLS, 465 for SSL
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            },
        });
    }

    async welcomeUser(email: string): Promise<void> {
        const mailOptions: nodemailer.SendMailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: "Welcome!",
            html: `
        <h1>Welcome!</h1>
      `,
        };

        try {
            await this.transporter.sendMail(mailOptions);
        } catch (error) {
            console.error("Error sending welcome email:", error);
            throw new Error("Failed to send welcome email");
        }
    }
}
