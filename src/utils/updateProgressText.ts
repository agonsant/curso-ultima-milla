import { BatteryType } from "../type/Battery";

export const updateProgressText = async () => {
    const battery: BatteryType = await navigator.getBattery();
    const batteryHtmlCard: HTMLElement = document.querySelector(".battery-card__charging--text") as HTMLElement;
    if(battery.charging){
        batteryHtmlCard.textContent = `Battery charging: ${battery.level * 100}%`
    } else {
        batteryHtmlCard.textContent = `Battery: ${battery.level * 100}%`
    }
};