import { createFactory } from 'hono/factory'
import { html } from 'hono/html'

const factory = createFactory()

const HomeHandler = factory.createHandlers((c) => {
  return c.html(html`
    <link rel="stylesheet"
href="https://fonts.googleapis.com/css?family=Roboto:300,300it
alic,700,700italic" />
<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/n
ormalize.css" />
<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/m
illigram.css" />
<!doctype html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,
        initial-scale=1.0">
        <title>Parking</title>
    </head>
    <body>
    <h1>Welcome to EuroPark</h1>
    <img src="../../static/parking.png" alt="parking">
    <p>Save time and money with EuroPark! Enjoy a 100% contactless parking
        experience for a short or long duration in our car parks in Europe!"</p>
    <a href="/cities/list">our cities</a>
    <a href="/parkings/list">Our Car Parks</a>
    </body>
    </html>


`)

 } )

export default HomeHandler;


