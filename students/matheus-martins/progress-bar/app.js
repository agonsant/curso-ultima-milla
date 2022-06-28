/* eslint-disable no-undef */
const { fromEvent, map, interval, take, concatAll } = rxjs;

const progressBar = document.getElementById('progress-bar-back');

const updateProgress = progressRatio => {
    console.log("progress:", progressRatio);
    progressBar.style.width += `${progressRatio}%`;
}

const clicks = fromEvent(document.querySelector('button'), 'click');

const higherOrder = clicks.pipe(
  map(() => interval(10).pipe(take(100)))
);
const firstOrder = higherOrder.pipe(concatAll());
firstOrder.subscribe(x => updateProgress(x));