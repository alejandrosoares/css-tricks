import api from "./helpers/wp_api.js";
import { App } from "./App.js"

document.addEventListener("DOMContentLoaded", App);

// Evento para detectar el cambio del hash
window.addEventListener("hashchange", e => {
    api.page = 1;
    App()
});
