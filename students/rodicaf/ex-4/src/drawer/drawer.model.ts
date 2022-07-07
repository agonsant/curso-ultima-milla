import { BatteryManagerInfo } from "../battery/battery-model";

export interface IDrawer {
    drawBattery: (b: BatteryManagerInfo) => void;
}