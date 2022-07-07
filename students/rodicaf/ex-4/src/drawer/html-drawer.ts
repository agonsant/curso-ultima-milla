import { BatteryManagerInfo } from "../battery/battery-model";
import { IDrawer } from "./drawer.model";

export class HTMLDrawer implements IDrawer {
  drawBattery(b:BatteryManagerInfo){
    throw new Error('Method Not Implemented');
  }    
}