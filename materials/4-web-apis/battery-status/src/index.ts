import {BatteryListener} from './battery/battery-listener';
import { AlertDrawer } from './drawer/alert-drawer';
import { ConsoleDrawer } from './drawer/console-drawer';
import { HTMLDrawer } from './drawer/html-drawer';

const batteryListener = new BatteryListener(); 

batteryListener.drawerSubscribe(new HTMLDrawer());
batteryListener.drawerSubscribe(new ConsoleDrawer());
// batteryListener.drawerSubscribe(new AlertDrawer());
