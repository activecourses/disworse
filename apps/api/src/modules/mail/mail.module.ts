import { Module } from "@nestjs/common";
import { NodemailerStrategy } from "./Providers/nodemailer";
import { MailService } from "./mail.service";

@Module({
    providers: [
        MailService,
        {
            provide: "MAIL_STRATEGY",
            useClass: NodemailerStrategy,
        },
    ],
    exports: [MailService],
})
export class MailModule {}
