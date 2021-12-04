import verifyDarkMode from "../../helpers/verify_dark_mode.js";


export function userConf(){

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
