import './style.css';

import { from, fromEvent, zip } from 'rxjs';
import { map, scan, delay, repeat } from 'rxjs/operators';

const progressBar = document.createElement('div') as HTMLDivElement;
progressBar.setAttribute('class', 'progress-bar');

const button = document.createElement('button') as HTMLButtonElement;
button.setAttribute('class', 'loadDataButton');
button.innerHTML = `Load Data`;
const list = document.createElement('ul') as HTMLUListElement;

const container = document.createElement('div') as HTMLDivElement;
container.setAttribute('class', 'container');
container.appendChild(button);
container.appendChild(list);
const body = document.querySelector('body') as HTMLBodyElement;
body!.appendChild(progressBar);
body!.appendChild(container);

const percentage: number[] = [20];

const progressAccumulator = (acc: number, currentPercentage: number) =>  acc + currentPercentage;

const changePercentage = (value: number) => {
    progressBar.style.width = `${value}%`;
    return value
};

const secuence = ['first', 'second', 'third', 'fourth', 'fifth'];

const newItem = (value: string) => {
    const item = document.createElement('li') as HTMLLIElement;
    item.setAttribute('id', `${value}item`);
    item.innerHTML = `${value}`;
    list.appendChild(item);
    return value;
};

const clicks$ = fromEvent<MouseEvent>(button, 'click');
clicks$.subscribe(event => {
    const percentages$ = from<number[]>(percentage).pipe(
        delay(1000),
        repeat(5),
        scan(progressAccumulator, 0),
        map(changePercentage),
    );
    const listItem$ = from(secuence);
    zip(percentages$, listItem$).pipe(
        map(value => newItem(value[1]))
    ).subscribe();
});