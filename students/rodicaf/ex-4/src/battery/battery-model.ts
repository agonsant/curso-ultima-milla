export type BatteryManagerInfo = {
    charging: Readonly<boolean>;
    chargingTime: Readonly<number>;
    dischargingTime: Readonly<number>;
    level: Readonly<number>;
}

export type BatteryManager = BatteryManagerInfo & {
    onchargingchange: (b: Event) => void;
    onchargingtimechange: (b: Event) => void;
    ondischargingtimechange: (b: Event) => void;
    onlevelchange: (b: Event) => void;
}