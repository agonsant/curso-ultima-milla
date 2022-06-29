import { fromEvent } from 'rxjs';

const startButton = document.getElementById("start");

const clickStartButton$ = fromEvent(startButton, 'click');
clickStartButton$.subscribe(() => console.log('Clicked!'));
