# CharlTops E-commerce

Este proyecto está realizado en React como práctica para el curso de `React Js` de `coder-house`.

# URL

https://charltops-ecommerce.web.app/

## Descripción

El sistema consiste en un e-commerce que permite ver productos (Camisas y/o Remeras en distintos talles y cantidades) y agregarlas a un carrito de compras para su posterior compra.

![GIF de demostración.](/public/charlTops.gif "Demo de una compra.")

## Comandos útiles para correr la aplicación

Dentro del directorio del proyecto se pueden ejecutar los siguientes comandos:

### `npm install`

Con este comando se instalarán las dependencias necesarias para correr la aplicación dentro de la carpeta \node_modules

### `npm start`

Levanta la app en modo desarrollo en el puerto [http://localhost:3000]

### `npm run build`

Construye la aplicación en la carpeta `build` en modo producción lista para hacer el deploy.

## Librerías utilizadas

* [React Js](https://reactjs.org)
* [Material UI](https://mui.com/)
* [Firebase](https://firebase.google.com/)

## Detalles de implementación

Al momento de visualizar una remera o camisa en particular se optó por dar la posibilidad de elegir el talle de la misma. El stock va a variar dependiendo la opción que se elija. 
Si se agrega una cierta cantidad de un producto al carrito y se quiere volver a agregar eso mismo, el contador iniciará su cantidad en el valor que ya haya en el carrito. De esta manera se evita que el usuario agregue más de lo disponible.

Para la etapa de Checkout se utilizó la misma vista `/cart` tanto para la visualización de los productos del carro como para el formulario con los datos personales del comprador. Esta decisión está basada en cuestiones de diseño visuales. Consideré que la vista quedaba bien así y que era no era necesaria otra vista para solo mostrar el formulario.

Para la validación del formulario (teléfono y email) no se agregó ninguna librería externa.



