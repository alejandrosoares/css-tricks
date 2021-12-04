// Main app of the project
import { Header } from "./components/header/header.js";
import { Main } from "./components/main.js";
import { Loader } from "./components/loader.js";
import { Router } from "./components/router.js";
import { infiniteScroll } from "./helpers/infinite_scroll.js";
import { loadUserSettings } from "./components/header/user_settings.js";
import { userConf } from "./components/user_conf/user_conf.js";

export function App(){
    const root = document.getElementById("root");
    
    root.innerHTML =  null;
    root.appendChild(userConf());
    root.appendChild(Header());
    root.appendChild(Main());
    root.appendChild(Loader());

    Router();
    infiniteScroll();
    loadUserSettings();
}
