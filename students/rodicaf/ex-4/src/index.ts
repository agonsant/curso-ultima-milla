// Battery charger exercise

import { Observable, from } from 'rxjs';

interface BatteryType {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: number | null;
  onchargingtimechange: number | null;
  ondischargingtimechange: number | null;
  onlevelchange: number | null;
}
declare global {
    interface Navigator {
    getBattery: () => Promise<BatteryType>;
    }
}

const batteryCharger = document.querySelector(".battery-info") as HTMLDivElement;
const message = document.querySelector(".message") as HTMLDivElement;
const levelHTML = document.querySelector("level") as HTMLDivElement;
const getLevel = (data) => {
  levelHTML.innerHTML = data;
};
const getMessage = (data) => {
  message.innerHTML = data;
};

(()=>{
  const batteryStatus$: Observable<BatteryType> = from(navigator.getBattery()); 
  batteryStatus$.subscribe(
    battery => { 
      console.log("Battery status: ", battery.level);
    //   getLevel(battery.level); 
      if (battery.level < 0.1) {
        batteryCharger.classList.add("red");
        getMessage("Low Battery"); 
      } else {
        batteryCharger.classList.add("green");
        getMessage("Battery Charging");
      }
    })  
})();


