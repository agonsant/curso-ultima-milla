import { BatteryManagerInfo } from "../battery/battery.model";
import { IDrawer } from "./drawer.model";



export class AlertDrawer implements IDrawer {

    renderBattery(b: BatteryManagerInfo){
        alert(`El nivel es: ${b.level}`);
    }
}