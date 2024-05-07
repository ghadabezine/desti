import { v4 as uuidv4 } from 'uuid';
export class Company {
    constructor(name, email, password, location) {
        this.id = uuidv4();
        this.name = name
        this.email = email
        this.password = password
        this.location = location

        this.activitieIds = []
    }
}