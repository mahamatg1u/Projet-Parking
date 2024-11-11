import { Hono } from 'hono';
import ReadAllCitiesController from '../Controllers/Parking/ReadAllCitiesController';
import ReadOneCityController from '../Controllers/Parking/ReadOneCityController';

const cityRoutes = new Hono();

cityRoutes.get('/list',...ReadAllCitiesController);
cityRoutes.post('/create', (c) => c.text('city created'));

export default cityRoutes;