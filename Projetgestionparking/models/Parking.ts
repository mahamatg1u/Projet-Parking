import { GPS } from '../types/GPS';
import { v4 as uuidv4,validate,version } from 'uuid';
import { Spot } from './Spot';
import {generateRandomNumberId} from "../utils/generateRandomNumberId"
export class Parking {
  id: number;
  name: string;
  city_id: number;
  location: GPS;
  numberOfSpots: number;
  opened: boolean;
  hourlyRate: number;
  parkIds: number[];

  constructor(name: string, city_id: number, location: GPS, numberOfSpots: number, hourlyRate: number,id?:number) {
   
    this.name = name;
    this.city_id = city_id;
    this.location = location;
    
   
    this.opened = true;
    if(hourlyRate<0)
        throw new Error("tarif négatif!!!!!!!!!!!")
        this.hourlyRate = hourlyRate;
    this.parkIds = [];
    if(!id)
        this.id = generateRandomNumberId();
    else
         this.id=id;

        
        if(numberOfSpots<0)
            throw new Error("nombre négatif sérieux!!!!!!!!!!!")
        this.numberOfSpots=numberOfSpots;
            for(let i=0;i<numberOfSpots;i++){
                const spot = new Spot(generateRandomNumberId(),this.id)
                this.parkIds.push(spot.id);
            }
}
  }
