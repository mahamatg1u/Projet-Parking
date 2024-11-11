import { Hono } from 'hono';
import ReadAllParkingController from '../Controllers/Parking/ReadAllParkingController'
const parkingRoutes = new Hono();

parkingRoutes.get('/list',...ReadAllParkingController);
parkingRoutes.post('/create', (c) => c.text('Parking created'));

export default parkingRoutes;