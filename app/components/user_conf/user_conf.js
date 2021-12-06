import verifyDarkMode from "../../helpers/verify_dark_mode.js";

import { darkMode, loadDarkMode } from "./dark-mode.js";
import { fastMode, loadFastMode } from "./fast-mode.js";


function hideUserConf(){
    const iconDiv = document.querySelector('.conf-icon'),
        status = iconDiv.getAttribute("data-status");
        
    if(status === "show"){
        const confOptions = document.querySelector('.conf-options');

        confOptions.classList.add('d-none');
        iconDiv.setAttribute('data-status', "hide");
    }
}

function showUserConf(){
    const iconDiv = document.querySelector('.conf-icon'),
        status = iconDiv.getAttribute("data-status");
        
    if(status === "hide"){
        const confOptions = document.querySelector('.conf-options');

        confOptions.classList.remove('d-none');
        iconDiv.setAttribute('data-status', "show");
    }
}

function loadUserConf(){

    document.addEventListener('click', e => {

        // click in conf
        if(e.target.matches('.conf *')){

            if(e.target.matches('.conf-icon *')){
                const iconDiv = e.target.closest('.conf-icon'),
                    status = iconDiv.getAttribute("data-status");

                (status === "hide")
                    ? showUserConf()
                    : hideUserConf();
                
                e.stopPropagation();
            }else{
                // click in fast mode switch
                if(e.target.matches('.fast-mode .switch *')){
                    const fastModeDiv = e.target.closest('.fast-mode'),
                        input = fastModeDiv.querySelector('input[type="checkbox"]');

                    fastMode(input.checked);
                    e.stopPropagation();
                }else{
                    if(e.target.matches('.dark-mode .switch *')){
                        const darkModeDiv = e.target.closest('.dark-mode'),
                            input = darkModeDiv.querySelector('input[type="checkbox"]');
            
                        darkMode(input.checked);
                        e.stopPropagation();
            
                        console.log("dark mode");
                    }else{
                        return false;
                    }
                }
            }
        }else{
            // click in other element
            hideUserConf();
        }
    })

    loadFastMode();
    loadDarkMode();
    
}

function userConf(){

    const conf = document.createElement("div"),
        imagePath = (verifyDarkMode())
            ? "app/assets/img/conf-white.png"
            : "app/assets/img/conf.png";

    conf.classList.add("conf");

    conf.innerHTML = `
        <div class="conf-container">
            <div class="conf-icon" data-status="hide">
                <img src="${imagePath}" alt="Config Icon">
            </div>
            <div class="conf-options d-none">
                <div class="fast-mode">
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                    <span class="switch-title">Fast mode</span>
                    <div class="i">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-question-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"></path>
                        </svg>
                        <div class="i-msg i-msg-right">
                            <p>List the posts without their presentation image, which reduces the weight of the page to 10 percent.</p>
                        </div>
                    </div>
                </div>
                <div class="dark-mode">
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                    <span class="switch-title">Dark mode</span>
                </div>
            </div>
        </div>
    `;
    return conf;
}


export { userConf, loadUserConf };