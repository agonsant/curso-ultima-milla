import { IBatteryType } from './IBatteryType';

declare global {
  interface Navigator {
      getBattery: () => Promise<IBatteryType>;
  }
}

let batteryLevel:number;

const getActualBattery = async()=> {
const battery:IBatteryType = await navigator.getBattery();
batteryLevel = battery.level * 100;
console.log('d',batteryLevel);
console.log('The currentBattery is:', batteryLevel,'%');
return batteryLevel;
};

getActualBattery();

const batteryComponent1 = document.getElementById('battery-indicator1');
const batteryComponent2 = document.getElementById('battery-indicator2');
const batteryComponent3 = document.getElementById('battery-indicator3');
const batteryComponent4 = document.getElementById('battery-indicator4');
const batteryComponent5 = document.getElementById('battery-indicator5');

console.log('g', batteryLevel)
if (batteryLevel < 80) {
  console.log('f');
  batteryComponent5.style.display = 'none';
};