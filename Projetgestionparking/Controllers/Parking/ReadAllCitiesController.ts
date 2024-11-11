import { createFactory } from 'hono/factory'
import {cities} from '../../data/staticDataBase';
import ReadAllCitiesView  from '../../views/city/ReadAllCitiesView';




const factory = createFactory()


const ReadAllCitiesController = factory.createHandlers((c) => {
  const liste_cities = ReadAllCitiesView({cities})
  return c.html(liste_cities)
}
)    


export default ReadAllCitiesController;



