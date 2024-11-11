
import { createFactory } from 'hono/factory'
import {parkings} from '../../data/staticDataBase';
import ReadAllParkingView from '../../views/city/ReadAllParkingView';




const factory = createFactory()


const ReadAllParkingssController = factory.createHandlers((c) => {
  const liste_parkings = ReadAllParkingView({parkings})
  return c.html(liste_parkings)
}
)    


export default ReadAllParkingssController;



