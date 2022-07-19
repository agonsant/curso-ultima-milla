export type BatteryManagerInfo = {
    readonly charging: boolean;
    readonly chargingTime: number;
    readonly dischargingTime: number;
    readonly level: number;
}

// intersection types (combines the object properties, 
// it is more an union than an intersection operation)
export type BatteryManager = BatteryManagerInfo & {
    onchargingchange: (b: Event) => void;
    onchargingtimechange: (b: Event) => void;
    ondischargingtimechange: (b: Event) => void;
    onlevelchange: (b: Event) => void;
}