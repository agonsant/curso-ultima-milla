import { BatteryManagerInfo } from "../battery/battery-model";

export interface IDrawer {
    updateProgress: (b: BatteryManagerInfo) => void;
    drawBattery: (b: BatteryManagerInfo) => void;
}