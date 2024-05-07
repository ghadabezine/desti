import { v4 as uuidv4 } from 'uuid';

export class UserImpl {
    constructor(name, email, password, location) {
        this.id = uuidv4(); // Generates a unique identifier
        this.name = name;
        this.email = email;
        this.password = password;
        this.location = location;
        this.activityIds = [];
    }
}
