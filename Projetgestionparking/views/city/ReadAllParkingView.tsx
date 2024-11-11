import { createFactory } from 'hono/factory'
import { html } from 'hono/html'
import {cities,parkings} from '../../data/staticDataBase';
import { Parking } from '../../models/Parking';
import {Layout} from "../shared/Layout"

    type ReadAllParkingViewProps = {
        parkings: Array<Parking>;
     }
    type ParkingListProps = {
        parkings: Array<Parking>;
      };
      
    export const ParkingsList = ({ parkings }: ParkingListProps) => {
        
        return html`
          <ul>
            ${parkings.map(parking => ReadAllParkingView({ parkings })).join('')}
          </ul>
        `;
      };



    

    const ReadAllParkingView = ({parkings}:ReadAllParkingViewProps) =>
        <Layout pageTitle="Our Parkings in Europe">
          
          <ul>
            {parkings.map(c=>
            <li><a href={"/parkings/"+c.id}>{c.name}</a></li>
            )}
          </ul>
      
        </Layout>


    


export default ReadAllParkingView;