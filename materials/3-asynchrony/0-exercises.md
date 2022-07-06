# Async exercises

## RxJS and Observer pattern

1. Vamos a crear un componente en vanilla de barra de progreso que cuando le demos al botón de cargar los datos, se vaya pintando la progressión. Para ello necesitamos generar un observable que emita 4 valores, separados por 1 segundo cada valor.

   Imagen de ejemplo:

   ![Progress Bar](https://drive.google.com/uc?export=view&id=18wsoRuVkjiQmhTDk8CgZo3BHTUTEyMqT)

   Vamos a necesitar utilizar los siguientes operadores:

   - concatAll
   - delay
   - fromEvent
   - from
   - scan
   - share
   - switchMap
   - withLatestFrom

2. Vamos a crear un componente contador como el que se muestra en la imagen.

   ![Counter](https://drive.google.com/uc?export=view&id=1cG8huWWfsqSe8jLed_NmLrENnF0QyhfZ)

   Para ello vamos a necesitar los siguientes operadores:

   - fromEvent
   - map
   - mapTo
   - scan
   - startWith
   - switchMap
   - takeWhile
