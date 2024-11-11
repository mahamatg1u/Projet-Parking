import { html } from 'hono/html';
import { city } from '../../models/city'; 
import { Layout } from '../shared/Layout'; 

type ReadOneCityViewProps = {
  city: city;
};

const ReadOneCityView = ({ city }: ReadOneCityViewProps) => {
  return Layout({
    pageTitle: `Détails de la ville: ${city.name}`,
    children: html`
      <div>
        <h1>${city.name}</h1> <!-- Nom de la ville -->
        <p>Pays: ${city.country}</p> <!-- Pays -->
        <p>Latitude: ${city.location.latitude}</p> <!-- Latitude -->
        <p>Longitude: ${city.location.longitude}</p> <!-- Longitude -->

        <!-- Ajoute un lien de retour à la liste des villes -->
        <p><a href="/cities/list">Retour à la liste des villes</a></p>
      </div>
    `,
  });
};

export default ReadOneCityView;
