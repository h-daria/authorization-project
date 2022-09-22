export class User {
    id: string;
    email: string;
    displayName: string;
    emailVerified: boolean;

    constructor(id: string, email: string, displayName: string, emailVerified: boolean) {
        this.id = id;
        this.email = email;
        this.displayName = displayName;
        this.emailVerified = emailVerified;
    }
}
