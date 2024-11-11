import { html } from 'hono/html';
import { Parking } from '../../models/Parking'; 
import { Layout } from '../shared/Layout'; 

type ReadOneParkingViewProps = {
  parking: Parking;
};

const ReadOneParkingView = ({ parking }: ReadOneParkingViewProps) => {
  return Layout({
    pageTitle: `Détails de Parking: ${parking.name}`,
    children: html`
      <div>
        <h1>${parking.name}</h1> <!-- Nom de Parking -->
        <p>id: ${parking.id}</p> <!-- id -->
        <p>id: ${parking.hourlyRate}</p> <!-- prix -->
        <p>id: ${parking.location.latitude}</p> 
        <p>id: ${parking.location.longitude}</p>
       <p><a href="/parkings/list">Retour à la liste des villes</a></p>
      </div>
    `,
  });
};

export default ReadOneParkingView;
