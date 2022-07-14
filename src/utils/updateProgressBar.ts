import { BatteryType } from "../type/Battery";

export const updateProgressBar = async (progressRatio: number) => {
    const batteryHtmlCard: HTMLElement = document.querySelector(".battery-card__charging") as HTMLElement;
    const battery: BatteryType = await navigator.getBattery();
    batteryHtmlCard.style.width = `${progressRatio}%`;
    if(battery.level < 0.3){
        batteryHtmlCard.style.backgroundColor = 'red';
    }
}