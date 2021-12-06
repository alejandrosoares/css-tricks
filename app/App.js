import { Header } from "./components/header/header.js";
import { Main } from "./components/main.js";
import { Loader } from "./components/loader.js";
import { Footer } from "./components/footer/footer.js";
import { Router } from "./components/router.js";
import { infiniteScroll } from "./helpers/infinite_scroll.js";
import { userConf, loadUserConf } from "./components/user_conf/user_conf.js";

export function App(){
    /*
    Only loads the contents of the sections
    */
    const root = document.getElementById("root");
    
    root.innerHTML =  null;
    root.appendChild(userConf());
    root.appendChild(Header());
    root.appendChild(Main());
    root.appendChild(Loader());
    root.appendChild(Footer());

    infiniteScroll();
    loadUserConf();
    MainApp();
}

export function MainApp(){
    /*
    Only loads the contents of the sections 
    through Router
    */
    
    const main = document.getElementById("main");

    main.innerHTML = "";
    
    Router();
}