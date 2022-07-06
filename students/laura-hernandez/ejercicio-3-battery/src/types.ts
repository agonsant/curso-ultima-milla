export interface BatteryType {
  charging: Readonly<boolean>;
  chargingTime: Readonly<number>;
  dischargingTime: Readonly<number>;
  level: Readonly<number>;
  onchargingchange: Function | null;
  onchargingtimechange: Function | null;
  ondischargingtimechange: Function | null;
  onlevelchange: Function | null;
}