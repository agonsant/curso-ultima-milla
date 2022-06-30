import { IBatteryType } from './IBatteryType';

declare global {
  interface Navigator {
      getBattery: () => Promise<IBatteryType>;
  }
}

const getActualBattery = async()=> {
const battery:IBatteryType = await navigator.getBattery();
const batteryLevel = battery.level * 100;
console.log('The currentBattery is:', batteryLevel,'%');
};

getActualBattery();
