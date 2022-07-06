# Web API's exercises

## Battery Status

Vamos a implementar un visualizador de batería. Para ello crearemos una web en la que visualizaremos este componente.

Para ello necesitamos la información que nos proporciona el web api de la batería.

[API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API).

Debemos utilizar RXJS para envolver el API y así ir emitiendo los eventos que producen cambios dentro de la batería. Crearemos una clase que tenga genere un observable devolviendo el nuevo estado de la batería en cada cambio y evento que produzca el API del Battery Status. La interfaz se tendrá que ver como la imagen y si estamos cargando, deberán rellenarse las celdas como en el gif.

![Design](https://cdn.dribbble.com/users/653743/screenshots/5007024/battery_still_2x.gif?compress=1&resize=400x300)
![Gif](https://media.geeksforgeeks.org/wp-content/uploads/20200506202219/ezgif.com-video-to-gif19.gif)
