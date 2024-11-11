import { v4 as uuidv4 ,version,validate} from 'uuid';

export class Park {
  id: string;
  spot_id: number;
  startedAt: Date;
  endedAt: Date | null;
  price: number;
  paid: boolean;

  constructor(spot_id: number, price: number,id?:string) {
    this.spot_id = spot_id;
    this.startedAt = new Date();
    this.endedAt = null;
    this.price = price;
    this.paid = false;
    if (id && (!validate(id) || version(id) !== 4)) {
        this.id = uuidv4();
    }else if(!id)
        this.id = uuidv4();
    else
        this.id=id;

  }
}
