# Api Rest Files

Proyecto api rest para centrarse en la subida y manejo de imagenes.
Se conecta a una base de datos MongoDB e interactua con dos modelos modelos:

- Album
- Author

El modelo Album contiene la información referente a un album de música como título, la fecha de salida o el genero. El modelo Author contiene la informacion de un cantante de música, como su nombre. El modelo Author tambien incluye una colección del modelo Album haciendo referencia a los albumes que ha publicado este autor.

## Instalación

Este proyecto requiere [Node.js](https://nodejs.org/) v10+ para funcionar.

Instala las dependencias y las dependencias de desarrollo.

```sh
cd practica-api-files
npm i
```

Para poblar la colección de albums.

```sh
npm run seed
```

Para arrancar el servidor en localhost en el puerto 3000.

```sh
npm run start
```

## Endpoints

Como esta indicado antes, esta api trabaja con dos modelos.
A continuación se listaran las rutas y los endpoints para poder interactuar con ellos.

### Album

```sh
127.0.0.1:3000/albums
```

| Método | Ruta | Cuerpo | Descripción |
| ------ | ------ | ------ | ------ |
| GET | / | | Obtiene todos los albums |
| GET | /:id | | Obtiene el album seleccionado por la id |
| POST | / | Objeto Album | Crea un album nuevo |
| PUT | /:id | Objeto Album | Actualiza un album por su id |
| DELETE | /:id | | Borra un album por su id |

### Author

```sh
127.0.0.1:3000/orders
```

| Método | Ruta | Cuerpo | Descripción |
| ------ | ------ | ------ | ------ |
| GET | / | | Obtiene todos los author |
| GET | /:id | | Obtiene el author seleccionada por la id |
| POST | / | Objeto Author | Crea un author nuevo |
| PUT | /:id | Objeto Authir | Actualiza un author por su id |
| DELETE | /:id | | Borra un authir por su id |

## Licencia

MIT