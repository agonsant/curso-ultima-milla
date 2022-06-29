import {delay, from, fromEvent, map, of, repeat, scan} from 'rxjs';

const chargeValue = 1;
const progressBar = document.getElementById('progress-bar') as HTMLDivElement;
const actualProgress = (chargeValue:number, currentValue:number) => chargeValue + currentValue;
const changeProgress = (progress:number) => {
  progressBar.style.width = `${progress}%`;
  return progress;
}

const button = document.getElementById('button');
const click$ = fromEvent<MouseEvent>(button, 'click');
click$.subscribe(click => {
  const chargeBar$ = of(chargeValue);
  chargeBar$.pipe(
    delay(30),
    repeat(100),
    scan(actualProgress),
    map(changeProgress)
    ).subscribe(x => x);
});