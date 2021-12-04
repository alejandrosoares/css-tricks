import verifyDarkMode from "../helpers/verify_dark_mode.js";


export function Loader(){

    const loader = document.createElement("img");

    loader.id = "loader";
    loader.src = (verifyDarkMode())
        ? "app/assets/img/loader-white.svg"
        : "app/assets/img/loader.svg";

    loader.alt = "Load content...";
    loader.classList.add("loader");

    return loader;
}