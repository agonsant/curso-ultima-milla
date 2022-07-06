import { BatteryManagerInfo } from "../battery/battery.model";


export interface IDrawer {
    renderBattery: (b: BatteryManagerInfo) => void;
}
