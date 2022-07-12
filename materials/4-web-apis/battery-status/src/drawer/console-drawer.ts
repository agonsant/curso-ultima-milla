import { BatteryManagerInfo } from "../battery/battery.model";
import { IDrawer } from "./drawer.model";




export class ConsoleDrawer implements IDrawer {

    renderBattery(b: BatteryManagerInfo){
        console.log('*******');
        console.log('-'.repeat(Math.floor(b.level*5)));
        console.log('*******');
        console.log(b.charging ? '!!!' : '???');
    }
}
