import verifyDarkMode from "../../helpers/verify_dark_mode.js";

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

function darkMode(active){
    /*
    Set in localstorage and add or remove the dark styles 
    of the elements
    @param: bool
    */

    const iconConf = document.querySelector(".conf-icon img");

    localStorage.setItem('dark-mode', active);

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
}


function loadDarkMode(){
    const activate = verifyDarkMode(),
        input = document.querySelector('.dark-mode input[type="checkbox"]');

    (activate)
        ? input.checked = true
        : input.checked = false;

    darkMode(activate);
}

export { darkMode, loadDarkMode };