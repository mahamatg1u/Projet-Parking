import { createFactory } from 'hono/factory'
import { html } from 'hono/html'
import {cities,parkings} from '../../data/staticDataBase';
import { city } from '../../models/city';
import {Layout} from "../shared/Layout"

    type ReadAllCitiesViewProps = {
     cities: Array<city>;
     }
    type CitiesListProps = {
        cities: Array<city>;
      };
      
    export const CitiesList = ({ cities }: CitiesListProps) => {
        return html`
          <ul>
            ${cities.map(city => ReadAllCitiesView({ cities })).join('')}
          </ul>
        `;
      };

//       type CityLinkProps = {
//         city: city;
//       };

      
      
//  const CityLink = ({ city }: CityLinkProps) => {
//         return html`<a href="/cities/${city.slug}">${city.name}</a>`;
//       };

      


    const ReadAllCitiesView = ({cities}:ReadAllCitiesViewProps) =>
        <Layout pageTitle="Our locations in Europe">
      
          <ul>
            {cities.map(c=>
            <li><a href={"/cities/"+c.slug}>{c.name}</a></li>
            )}
          </ul>
      
        </Layout>


    
// const ReadAllCitiesView =
// ({ cities }: ReadAllCitiesViewProps) =>
// <Layout pageTitle='liste des villes'>
// <div>
// <h1>Liste des villes</h1>
//       <ul>
//         {cities.map((city) => (
//           <li>
//             <h2>{city.name}</h2>
//             <p>Pays: {city.country}</p>
//             <p>
//               Latitude: {city.location.latitude}, Longitude: {city.location.longitude}
//             </p>
//           </li>
//         ))}
//       </ul>
// </div>
// </Layout>

// export function ReadAllCitiesView(cities: city[]): string{
//     const liste_cities=cities.map(city => html`
//     <li>
//     <h2>${city.name}</h2>
//     <p>${city.country}</p>
//     <p>Latitude: ${city.location.latitude}<br> Longitude: ${city.location.longitude}</p>
//     </li>
// `).join('');

// return `
// <link rel="stylesheet"
// href="https://fonts.googleapis.com/css?family=Roboto:300,300it
// alic,700,700italic" />
// <link rel="stylesheet"
// href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/n
// ormalize.css" />
// <link rel="stylesheet"
// href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/m
// illigram.css" />
//         <!doctype html>
//     <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width,
//         initial-scale=1.0">
//         <title>Parking</title>
//     </head>
//     <body>
//     <h1>Liste des villes</h1>
//     <ul>
//     ${liste_cities}
//     </ul>
//     </body>
//     </html>
// `
// }

export default ReadAllCitiesView;