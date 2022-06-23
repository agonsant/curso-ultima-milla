/* eslint-disable no-undef */
const { fromEvent, from, scan } = rxjs;

const progress$ = from([20, 40, 60, 80, 100]);

const increaseProgress = () => {
    progress$.pipe(
        scan((total) => total + 1, 0),
    ).subscribe(console.log);
    console.log('Clicked!');
}

fromEvent(document.querySelector("button"), 'click').subscribe(() => increaseProgress());
