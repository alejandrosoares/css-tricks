import global from "../../helpers/global.js";

function setDarkMode(active){

    localStorage.setItem("dark-mode", active);
    global.DARK_MODE = active;
}

function getDarkModeStatus(){

    const local =  localStorage.getItem("dark-mode");

    if(local === "true"){
        global.DARK_MODE = true;
        return true;
    }

    global.DARK_MODE = false;
    return false;
}

function clearClass(selector){

    return selector.replace(".", "").replace("#", "");
}

function addStyle(add, selectorsList){

    selectorsList.forEach( selector => {
        let element = document.querySelector(selector),
            classDarkMode = `${clearClass(selector)}-dark-mode`;

        if(element){
            (add)
                ? element.classList.add(classDarkMode)
                : element.classList.remove(classDarkMode);
        }
    })
}

function setDarkModeStatus(active){
    /*
    Set in localstorage and add or remove the dark styles 
    of the elements
    @param: bool
    */

    const iconConf = document.querySelector(".conf-icon img");

    if(active){
        // Adding dark-mode styles
        addStyle(true, [ "body", ".conf", ".header", ".footer"]);

        iconConf.setAttribute("src", "app/assets/img/conf-white.png");

        setTimeout(() => {
            addStyle(true, [ ".contact" ]);
        }, 200)
           
    }else{
        // Removing dark-mode styles
        addStyle(false, [ "body", ".conf", ".header", ".footer"]);
        
        iconConf.setAttribute("src", "app/assets/img/conf.png");

        setTimeout(() => {
            addStyle(false, [ ".contact" ]);
        }, 200)
    }

    setDarkMode(active);
}


function loadDarkMode(){
    const input = document.querySelector('.dark-mode input[type="checkbox"]'),
        active = getDarkModeStatus();

    input.checked = active;
    setDarkModeStatus(active);
}

export { setDarkModeStatus, loadDarkMode };