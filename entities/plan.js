
import { v4 as uuidv4 } from 'uuid';

export class Plan {
    constructor(title, description, imageUrl) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}