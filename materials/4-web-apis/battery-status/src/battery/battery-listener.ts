import { from, Observable, Subject, Subscription } from 'rxjs';
import { IDrawer } from '../drawer/drawer.model';
import { BatteryManager, BatteryManagerInfo } from './battery.model';


/**
 * Gestión y abstacción de la batería
 */
export class BatteryListener {

    private battery$: Subject<BatteryManagerInfo>;

    constructor() {
        this.battery$ = new Subject<BatteryManagerInfo>();
        navigator.getBattery().then(battery => {
            this.battery$.next(battery); // lanza la batería del navegador
            const batteryEvent = () => this.battery$.next(battery);
            battery.onlevelchange = batteryEvent;
            battery.onchargingchange = batteryEvent;
        });
    }

    drawerSubscribe(drawer: IDrawer): Subscription {
       return this.battery$.subscribe(b => drawer.renderBattery(b));
    }

}