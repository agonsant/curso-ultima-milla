// Battery charger exercise
import { BatteryListener } from "./battery/battery-listener";
import { HTMLDrawer } from "./drawer/html-drawer";
import { IDrawer } from './drawer/drawer.model'; 


const myBattery= new BatteryListener();
const htmlDrawer: IDrawer = new HTMLDrawer();

myBattery.getObservable().subscribe(b => htmlDrawer.drawBattery(b));