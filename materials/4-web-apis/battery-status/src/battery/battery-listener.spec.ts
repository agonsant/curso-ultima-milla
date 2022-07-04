import { IDrawer } from "../drawer/drawer.model";
import { BatteryListener } from "./battery-listener";
import { BatteryManager, BatteryManagerInfo } from "./battery.model";



class MockDrawer implements IDrawer {
    renderBattery(b: BatteryManagerInfo){}
}

const MockBatteryManager: BatteryManager = {
    level: 0.55,
    charging: true,
    dischargingTime: 0,
    chargingTime: 0,
    onchargingchange: null,
    onchargingtimechange: null,
    onlevelchange: null,
    ondischargingtimechange: null
}

navigator.getBattery = () => Promise.resolve(MockBatteryManager)

describe('BatteryListener',() => {
    let batteryListener: BatteryListener;

    beforeEach(() => {
        batteryListener = new BatteryListener();
    });

    it('given a new subscriber, it should return the battery info', () => {
        const myDrawer = new MockDrawer();
        jest.spyOn(myDrawer, 'renderBattery').mockImplementation(b => {
            expect(b).toBeDefined();
            expect(b.level).toBe(0.55);
            expect(b.charging).toBe(true);
        });
        batteryListener.drawerSubscribe(myDrawer);
    });

    it('given a subscriber, when unplug the charger it should return the battery info without charging', () => {
        const myDrawer = new MockDrawer();
        jest.spyOn(myDrawer, 'renderBattery').mockImplementation(b => {
            expect(b).toBeDefined();
            expect(b.level).toBe(0.55);
            expect(b.charging).toBe(false);
        });
        batteryListener.drawerSubscribe(myDrawer);
        MockBatteryManager.charging=false;
        MockBatteryManager.onchargingchange?.(new Event('chargingchange'));

    });

});