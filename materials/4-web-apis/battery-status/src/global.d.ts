import { BatteryManager } from "./battery/battery.model";

declare global {
    interface Navigator {
        getBattery: () => Promise<BatteryManager>;
    }
}