import { createFactory } from 'hono/factory';
import { cities } from '../../data/staticDataBase'; 
import ReadOneCityView from '../../views/city/ReadOneCityView'; 

const factory = createFactory();

const ReadOneCityController = factory.createHandlers((c) => {
  const { slug } = c.req.param();

  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return c.html("<h1>City n'existe pas</h1>", 404);
  }

  const cityView = ReadOneCityView({ city });
  return c.html(cityView); 
});

export default ReadOneCityController;
