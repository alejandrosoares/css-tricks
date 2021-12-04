import verifyDarkMode from "../../helpers/verify_dark_mode.js";
import verifyFastMode from "../../helpers/verify_fast_mode.js";

function fastMode(active){
    localStorage.setItem('fast-mode', active);
    location.reload();
}

function darkMode(active){
    localStorage.setItem('dark-mode', active);

    // elements where applied dark mode
    const body = document.querySelector('body'),
        conf = document.querySelector(".conf"),
        iconConf = conf.querySelector(".conf-icon img"),
        header = document.querySelector('.header'),
        contact = document.getElementById("contact");

    if(active){
        body.classList.add('body-dark-mode');
        conf.classList.add('conf-dark-mode');
        header.classList.add('header-dark-mode');
        if(contact) contact.classList.add('contact-dark-mode');
        
        iconConf.setAttribute("src", "app/assets/img/conf-white.png");
    }else{
        body.classList.remove('body-dark-mode');
        conf.classList.add('conf-dark-mode');
        header.classList.remove('header-dark-mode');
        if(contact)  contact.classList.remove('contact-dark-mode');
        
        // change icon of user conf
        iconConf.setAttribute("src", "app/assets/img/conf.png");
    }
}

function loadFastMode(){
    const activate = verifyFastMode(),
        input = document.querySelector('.fast-mode input[type="checkbox"]');

    (activate)
        ? input.checked = true
        : input.checked = false;
}

function loadDarkMode(){
    const activate = verifyDarkMode(),
        input = document.querySelector('.dark-mode input[type="checkbox"]');

    (activate)
        ? input.checked = true
        : input.checked = false;

    darkMode(activate);
}   

const loadUserSettings = () => {
    window.addEventListener('click', e => {

        console.log(e.target);

        // click in btn of conf
        if(e.target.matches('.conf-icon *')){
            const iconDiv = e.target.closest('.conf-icon'),
                status = iconDiv.getAttribute("data-status"),
                parentDiv = iconDiv.parentNode,
                confOptions = parentDiv.querySelector('.conf-options');
            
            console.log(status);

            if(status === "hide"){
                confOptions.classList.remove('d-none');
                iconDiv.setAttribute('data-status', "show");
            }else{
                confOptions.classList.add('d-none');
                iconDiv.setAttribute('data-status', "hide");
            }

        }else{
            // Click in window
            if(!e.target.matches('.conf-options *')){

                const iconDiv = document.querySelector('.conf-icon'),
                status = iconDiv.getAttribute("data-status");
        
                if(status == "show"){
                    const confOptions = document.querySelector('.conf-options');

                    confOptions.classList.add('d-none');

                    iconDiv.setAttribute('data-status', "hide");
                }
            }
            
        }

        // click in fast mode switch
        if(e.target.matches('.fast-mode .switch *')){
            const fastModeDiv = e.target.closest('.fast-mode'),
                input = fastModeDiv.querySelector('input[type="checkbox"]');

            fastMode(input.checked);
        }

        // Click in dark mode
        if(e.target.matches('.dark-mode .switch *')){
            const darkModeDiv = e.target.closest('.dark-mode'),
                input = darkModeDiv.querySelector('input[type="checkbox"]');

            darkMode(input.checked);
        }
    })

    loadFastMode();
    loadDarkMode();
    
}



export { loadUserSettings };
