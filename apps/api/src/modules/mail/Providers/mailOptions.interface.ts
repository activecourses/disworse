// this interface used for all messages that server can send via email.
export interface mailOptions {
    welcomeUser(email: string): Promise<void>;
}
