// Exercise 1
// The observables are 
import { fromEvent, of, map, from} from 'rxjs';
import { concatAll, delay } from 'rxjs/operators';

const items$ = from(['first', 'second', 'third','fourth']);

items$
  .pipe(
    map(item => of(item).pipe(delay(1000))),
    concatAll()
  )
  .subscribe( val => console.log(val) );

// const progressBar = document.querySelector(".progress-bar");  
// const loadButton = document.querySelector(".load-data")!;
// const data = document.querySelector(".data");

// compute percentage completion

// const click$ = fromEvent(loadButton, 'click');

console.log('Hello world');


