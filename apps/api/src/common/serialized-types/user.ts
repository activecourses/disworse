export class SerializedUser {
    name: string;
    username: string;
    email: string;
    dob: string;

    constructor(user: any) {
        // TODO: fix any

        this.name = user.name;
        this.username = user.username;
        this.email = user.email;
        this.dob = user.dob;
    }
}
