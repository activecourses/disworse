// src/mail/mail.service.ts
import { Inject, Injectable } from "@nestjs/common";
import { MailContext } from "./Providers/mail-context";
import { mailOptions } from "./Providers/mailOptions.interface";
import { NodemailerStrategy } from "./Providers/nodemailer";

/* this is the mail service class where it used in other services or controllers */
@Injectable()
export class MailService {
    private mailContext: MailContext;

    // make sure to select used strategy
    constructor(@Inject("MAIL_STRATEGY") defaultStrategy: mailOptions) {
        this.mailContext = new MailContext(defaultStrategy);
    }

    changeStrategyToNodemailer() {
        this.mailContext.setStrategy(new NodemailerStrategy());
    }

    async welcomeUser(email: string) {
        await this.mailContext.WelcomeUser(email);
    }
}
