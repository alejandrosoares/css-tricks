import global from "../helpers/global.js";

export function Loader(){

    const loader = document.createElement("img");

    loader.id = "loader";
    loader.src = (global.DARK_MODE)
        ? "app/assets/img/loader-white.svg"
        : "app/assets/img/loader.svg";

    loader.alt = "Load content...";
    loader.classList.add("loader");

    return loader;
}