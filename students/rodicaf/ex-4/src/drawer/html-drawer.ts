import { BatteryManagerInfo } from "../battery/battery-model";
import { IDrawer } from "./drawer.model";

export class HTMLDrawer implements IDrawer {
  drawBattery(b:BatteryManagerInfo){
    const batteryCharger = document.querySelector(".battery-info__image") as HTMLDivElement;
    const message = document.querySelector(".message") as HTMLDivElement;
    const levelDiv = document.querySelector("levelDiv") as HTMLDivElement;

    levelDiv.textContent = `${b.level}`;
    if (b.level > 0.2) {
      message.innerText = 'Battery charging';
      batteryCharger.classList.add('green');
    } else {
      message.innerText = 'Low battery';
      batteryCharger.classList.add('red');
    }

  }    
}