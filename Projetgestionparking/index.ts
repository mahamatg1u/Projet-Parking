import { Hono } from 'hono';
import parkingRoutes from './routes/parkingRoutes';
import cityRoutes from './routes/cityRoutes';
import HomeHandler from './Controllers/HomeController';
import { serveStatic } from 'hono/bun';
import {cities,parkings} from './data/staticDataBase';
import ReadOneCityController from "./Controllers/Parking/ReadOneCityController"
import ReadOneParkingController from "./Controllers/Parking/ReadOneParkingController"
import {
    appendTrailingSlash,
    trimTrailingSlash,
  } from 'hono/trailing-slash'

  import { HTTPException } from 'hono/http-exception'
  import { Database } from "bun:sqlite";

// const db = new Database();
// const query = db.query("select 'Hello world' as message;");
// query.get(); // => { message: "Hello world" }


const app = new Hono({ strict: true });
  
    
app.use('*', trimTrailingSlash()); 
// Ajout des routes avec un préfixe
app.use('/static/*', serveStatic({ root: './' }))

app.get('/',...HomeHandler);

app.route('/parkings', parkingRoutes);
app.get('/parkings/:id', ...ReadOneParkingController);
app.route(`/cities`, cityRoutes);
app.get(`/cities/:slug`,...ReadOneCityController);



export default app
// app.fire();
