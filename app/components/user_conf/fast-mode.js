import global from "../../helpers/global.js";

function getFastModeStatus() {
   const local = localStorage.getItem("fast-mode");

   if (local === "true") {
      global.FAST_MODE = true;
      return true;
   }

   global.FAST_MODE = false;
   return false;
}

function setFastModeStatus(active) {
   localStorage.setItem("fast-mode", active);
   global.FAST_MODE = active;
}

function loadFastMode() {
   /*
    Activates the inputs based on the value of localStorage
    */
   const input = document.querySelector('.fast-mode input[type="checkbox"]');

   input.checked = getFastModeStatus();
}

export { setFastModeStatus, loadFastMode };
