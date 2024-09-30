import { mailOptions } from "./mailOptions.interface";

// this class is where you select the strategy you want work with e.g. nodemailer , brevo...
export class MailContext {
    private strategy: mailOptions;

    constructor(strategy: mailOptions) {
        this.strategy = strategy;
    }

    setStrategy(strategy: mailOptions) {
        this.strategy = strategy;
    }

    async WelcomeUser(email: string) {
        this.strategy.welcomeUser(email);
    }
}
