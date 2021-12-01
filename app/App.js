// Main app of the project
import { Header } from "./components/header/header.js";
import { Main } from "./components/main.js";
import { Loader } from "./components/loader.js";
import { Router } from "./components/router.js";
import { infiniteScroll } from "./helpers/infinite_scroll.js";

export function App(){
    const root = document.getElementById("root");
    
    root.innerHTML =  null;
    root.appendChild(Header());
    root.appendChild(Main());
    root.appendChild(Loader());

    // como en el evento haschange se ejecuta nuevamente
    // router, entonces se realizan los cambios que
    // estan dentro de router
    Router();
    infiniteScroll();
}
