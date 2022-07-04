import { BatteryManagerInfo } from "../battery/battery.model";
import { IDrawer } from "./drawer.model";



export class HTMLDrawer implements IDrawer {

    private CONTAINER_CLASS = 'battery__container';
    private container: Element;

    constructor(){
        this.container = document.createElement('section');
        this.container.classList.add(this.CONTAINER_CLASS);
        document.body.appendChild(this.container);
    }
    
    renderBattery(b: BatteryManagerInfo){
        this.clear();
        const p = document.createElement('p');
        p.textContent = b.charging.toString();
        this.container.appendChild(p);
    }

    private clear(){
       this.container.innerHTML = '';
    }
}
