import{toSlug}from '../utils/ToSlug'
import {GPS} from '../types/GPS'
import {generateRandomNumberId} from'../utils/generateRandomNumberId'
//import { v4 as uuidv4, validate,version } from 'uuid';


export class city{
    id:number;
    name:string;
    slug:string;
    ParkingsIds:number[];
    country:string;
    location:GPS;
    constructor(id:number,name:string,country:string,location:GPS){
        this.id=id;
        this.name=name;
        this.slug=toSlug(name);
        this.country=country;
        this.location=location;
        this.ParkingsIds=[];
    }




}
