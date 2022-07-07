// Battery charger exercise
import { BatteryListener } from "./battery/battery-listener";


const myBattery= new BatteryListener();
myBattery.getObservable().subscribe(console.log);

const batteryCharger = document.querySelector(".battery-info") as HTMLDivElement;
const message = document.querySelector(".message") as HTMLDivElement;
const level = document.querySelector("level") as HTMLDivElement;