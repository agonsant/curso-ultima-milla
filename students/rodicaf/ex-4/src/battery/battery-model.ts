export type BatteryManagerInfo = {
    readonly charging: boolean;
    readonly chargingTime: number;
    readonly dischargingTime: number;
    readonly level: number;
}

export type BatteryManager = BatteryManagerInfo & {
    onchargingchange: (b: Event) => void;
    onchargingtimechange: (b: Event) => void;
    ondischargingtimechange: (b: Event) => void;
    onlevelchange: (b: Event) => void;
}