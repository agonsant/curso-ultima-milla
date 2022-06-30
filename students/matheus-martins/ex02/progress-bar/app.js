/* eslint-disable no-undef */
const { fromEvent, map, interval, take, concatAll } = rxjs;

const progressBar = document.getElementById('progress-bar-back');

const updateProgress = progressRatio => {
  console.log(progressRatio);
    progressBar.style.width = `${progressRatio}%`;
}

const clicks$ = fromEvent(document.querySelector('button'), 'click');

const loadData = clicks$.pipe(
  map(() => interval(10).pipe(take(301)))
);
loadData.pipe(concatAll()).subscribe(x => updateProgress(x));