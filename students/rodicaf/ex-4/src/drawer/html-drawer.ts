import { BatteryManagerInfo } from "../battery/battery-model";
import { IDrawer } from "./drawer.model";

export class HTMLDrawer implements IDrawer {

  updateProgress(b:BatteryManagerInfo) {
    const progressBar = document.querySelector(".battery-charging__progress") as HTMLDivElement;
    const newPercentage = b.level*100;
    console.log(newPercentage);
    progressBar.style.width = `${newPercentage}%`;
  };

  drawBattery(b:BatteryManagerInfo){
    const batteryCharger = document.querySelector(".battery-info__image") as HTMLDivElement;
    const message = document.querySelector(".message") as HTMLParagraphElement;
    const level = document.querySelector(".level") as HTMLParagraphElement;

    level.textContent = `${b.level*100}%`;
    if (b.level > 0.2) {
      message.innerText = 'Battery charging';
      batteryCharger.classList.add('green');
    } else {
      message.innerText = 'Low battery';
      batteryCharger.classList.add('red');
    }

  }    
}