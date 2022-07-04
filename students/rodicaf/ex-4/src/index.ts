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
const level = document.querySelector("level") as HTMLDivElement;

export class BatteryStatus {
  batteryStatus$: Observable<BatteryType> = from(navigator.getBattery()); 
  
  constructor () {}
  
  // check battery status
  checkBatteryLevel() {
    this.batteryStatus$.subscribe(
      battery => { 
        console.log("Battery status: ", battery.level);
        console.log("Battery status: ", battery.charging); 
        // level.innerHTML = `${battery.level}%`;
        if (battery.level < 0.1) {
          batteryCharger.classList.add("red");
          message.innerText = "Low Battery";
        } else {
          batteryCharger.classList.add("green");
          message.innerText = "Battery Charging";
        }
      }
    )
  }
  
  isCharging() {
    this.batteryStatus$.subscribe(
      battery => { 
        console.log("Battery status: ", battery.charging);
      }
    )  
  }
} 


const myBattery = new BatteryStatus();
myBattery.checkBatteryLevel();