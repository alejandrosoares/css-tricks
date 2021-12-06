import verifyFastMode from "../../helpers/verify_fast_mode.js";

function fastMode(active){
    /*
    Set in localstorage and reload page
    @param: bool
    */

    localStorage.setItem('fast-mode', active);
    location.reload();
}


function loadFastMode(){
    const activate = verifyFastMode(),
        input = document.querySelector('.fast-mode input[type="checkbox"]');

    (activate)
        ? input.checked = true
        : input.checked = false;
}

export { fastMode, loadFastMode };