import { fromEvent, interval, of , from} from 'rxjs';

const cellsIds = from(["cell-1", "cell-2", "cell-3", "cell-4" ]);

cellsIds.subscribe();

const batteryContainer = document.getElementById("battery-container");
const batteryInfoText = document.getElementById("info-text");

navigator.getBattery().then(battery => {
  function updateAllBatteryInfo(){
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', () => {
    updateChargeInfo();
  });
  function updateChargeInfo(){
    console.log("Battery charging? "
                + (battery.charging ? "Yes" : "No"));
  }

  battery.addEventListener('levelchange', () => {
    updateLevelInfo();
  });
  function updateLevelInfo(){
    console.log("Battery level: "
                + battery.level * 100 + "%");
  }

  battery.addEventListener('chargingtimechange', () => {
    updateChargingInfo();
  });
  function updateChargingInfo(){
    console.log("Battery charging time: "
                 + battery.chargingTime + " seconds");
  }

  battery.addEventListener('dischargingtimechange', () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo(){
    console.log("Battery discharging time: "
                 + battery.dischargingTime + " seconds");
  }
                
  if (battery.level === 1) {
    document.getElementById("cell-1").style.background = "#50eb47"
    document.getElementById("cell-2").style.background = "#50eb47"
    document.getElementById("cell-3").style.background = "#50eb47"
    document.getElementById("cell-4").style.background = "#50eb47"
    batteryContainer.style.background = "#97ec97";
  }

  if (battery.level < 1) {
    document.getElementById("cell-1").style.background = "#50eb47"
    document.getElementById("cell-2").style.background = "#50eb47"
    document.getElementById("cell-3").style.background = "#50eb47"
    document.getElementById("cell-4").style.background = "white"
    batteryContainer.style.background = "#97ec97";
  }

  if (battery.level < 0.75) {
    document.getElementById("cell-1").style.background = "#50eb47"
    document.getElementById("cell-2").style.background = "#50eb47"
    document.getElementById("cell-3").style.background = "white"
    document.getElementById("cell-4").style.background = "white"
    batteryContainer.style.background = "#97ec97";
  }

  if (battery.level < 0.5) {
    document.getElementById("cell-1").style.background = "50eb47"
    document.getElementById("cell-2").style.background = "white"
    document.getElementById("cell-3").style.background = "white"
    document.getElementById("cell-4").style.background = "white"
    batteryContainer.style.background = "#97ec97";
  } 
  
  if (battery.level < 0.25) {
    document.getElementById("cell-1").style.background = "red"
    document.getElementById("cell-2").style.background = "white"
    document.getElementById("cell-3").style.background = "white"
    document.getElementById("cell-4").style.background = "white"
    batteryContainer.style.background = "#e89898";
  } 

  if(battery.charging) {
    batteryInfoText.innerHTML = "Charging";
  }
});