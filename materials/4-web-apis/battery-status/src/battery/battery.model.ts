

/**
 * Represents the battery information
 */
export type BatteryManagerInfo = {
    charging: Readonly<boolean>;
    chargingTime: Readonly<number>;
    dischargingTime: Readonly<number>;
    level: Readonly<number>;
}

export type BatteryManager = BatteryManagerInfo & {
    onchargingchange: ((ev: Event) => void) | null;
    onchargingtimechange: ((ev: Event) => void) | null;
    ondischargingtimechange: ((ev: Event) => void) | null;
    onlevelchange: ((ev: Event) => void) | null;
}