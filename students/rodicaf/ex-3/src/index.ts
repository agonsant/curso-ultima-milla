// Exercise 1 - Progression bar 
import { fromEvent, of, map, from} from 'rxjs';
import { concatAll, delay, switchMapTo, share, count, scan, withLatestFrom } from 'rxjs/operators';

// create an observable of 4 values 
const items$ = from(['first', 'second', 'third','fourth']);
// create a stream, the values are coming over time
const values$ = items$
  .pipe(
    map(item => of(item).pipe(delay(1000))),
    concatAll()
  );

// get reference of the HTML elements  
const progressBar = document.querySelector(".progress-bar") as HTMLDivElement;  
const loadButton = document.querySelector(".load-data") as HTMLButtonElement;
const data = document.querySelector(".data") as HTMLDivElement;

// create an observable of button clicks 
const clicks$ = fromEvent(loadButton, 'click');

// subscribe to the values observable on the click of the button
const progress$ = clicks$
  .pipe(
    switchMapTo(values$), 
  );

// show data on screen
const updateContent = (newContent: string) => {
  data.innerHTML += newContent;
};

const displayData = (data:string) => {
  updateContent(`<div class="content-item">${data}</div>`)
};  

// compute percentage completion
const updateProgress = () => {
  const percentage = Number(progressBar.style.width.slice(0,-1));
  const newPercentage = Math.min((percentage + 25), 100);
  progressBar.style.width = `${newPercentage}%`;
};

progress$.subscribe(
  {
    next(x) { 
      displayData(x); 
      updateProgress();
    },
    error(err) { 
      console.error('something wrong occurred: ' + err); 
    },
    complete() { 
      console.log('done');
      progressBar.classList.add('finished');
    }
  }
);


// https://www.learnrxjs.io/learn-rxjs/recipes/progressbar
// https://dev.to/ajitsinghkaler/rxjs-tutorials-progress-bar-ex-2-1-4np2
