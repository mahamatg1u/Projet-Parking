import { createFactory } from 'hono/factory';
import { parkings } from '../../data/staticDataBase'; 
import ReadOneParkingView from '../../views/city/ReadOneParkingView'; 

const factory = createFactory();

const ReadOneParkingController = factory.createHandlers((c) => {
  const id = parseInt(c.req.param('id'), 10);
 
 

  const parking =  parkings.find((parking) => parking.id === id);
  

  if (!parking) {
    return c.html("<h1>Parking n'existe pas</h1>", 404);
  }

  const parkingvue = ReadOneParkingView({ parking });
  return c.html(parkingvue); 
});

export default ReadOneParkingController;
