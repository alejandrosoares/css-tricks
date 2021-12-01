export function Loader(){

    const loader = document.createElement("img");
    
    loader.id = "loader";
    loader.src = "app/assets/img/loader.svg";
    loader.alt = "Load content...";
    loader.classList.add("loader");

    return loader;
}