import { v4 as uuidv4 } from 'uuid';
export class Activity{
    constructor(name, companyId , type ,time,location,photo,description){
        this.id=uuidv4();
        this.name=name
        this.type=type
        this.time=time
        this.location=location
        this.companyId = companyId
        this.photo=photo
        this.description=description
    }
}