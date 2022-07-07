import { Subject, Subscription } from 'rxjs';
import { BatteryManagerInfo, BatteryManager } from './battery-model';

declare global {
  interface Navigator {
    getBattery: () => Promise<BatteryManager>;
  }
}

export class BatteryListener {
  private battery$: Subject<BatteryManagerInfo>; 
    
  constructor () {
    // initialize own observable
    this.battery$ = new Subject<BatteryManagerInfo>();
    navigator.getBattery().then(battery => {
        this.battery$.next(battery);
        const batteryEvent = () => this.battery$.next(battery);
        battery.onlevelchange = batteryEvent;
        battery.onchargingchange  = batteryEvent;
    })
  }

  getObservable(){
    return this.battery$;  
  }
}