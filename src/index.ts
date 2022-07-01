import { from, Observable } from "rxjs";
import { BatteryType } from "./type/Battery";
import { updateProgressBar } from "./utils/updateProgressBar";
import { updateProgressText } from "./utils/updateProgressText";
declare global {
    interface Navigator {
        getBattery: () => Promise<BatteryType>;
    }
}

(() => {
    const battery$: Observable<BatteryType> = from(navigator.getBattery());
    updateProgressText();
    battery$.subscribe((battery) => updateProgressBar(battery.level * 100));
})()

export {};
