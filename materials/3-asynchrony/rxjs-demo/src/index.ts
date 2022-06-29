// ESM
import { fromEvent, interval, of } from 'rxjs';
import { other, helloRxJS } from './other';
// CJS
// const {other} = require('./other.js');


console.log('Loading NodeJS: ', other);
console.log('utilizando rxjs');
helloRxJS();
other.replaceAll('a', 'o');

const event$ = fromEvent(document.body, 'click');

event$.subscribe(e => console.log(e, '1'));

event$.subscribe(e => console.log(e, '2'));

const one$ = of(20); // emite 3 valores y complete
const btn = document.querySelectorAll('#demo_button');
const two$ = fromEvent(btn,'click'); // emite 1 valor cada segundo

// 

