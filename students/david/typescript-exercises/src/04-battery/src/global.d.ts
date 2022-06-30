import {IBatteryType} from './IBatteryType';

declare interface Navigator {
      getBattery: () => Promise<IBatteryType>;
  }

