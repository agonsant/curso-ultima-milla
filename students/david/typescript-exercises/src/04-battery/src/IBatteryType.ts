export interface IBatteryType{
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: Function | null;
  onchargingtimechange: Function | null;
  ondischargingtimechange: Function | null;
  onlevelchange: Function | null;
  getBattery: Function;
}