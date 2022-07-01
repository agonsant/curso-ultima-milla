export interface BatteryType {
    charging: boolean;
    chargingTime: function;
    dischargingTime: function;
    level: number;
    onchargingchange: number | null;
    onchargingtimechange: number | null;
    ondischargingtimechange: number | null;
    onlevelchange: number | null;
}