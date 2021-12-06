import api from "./helpers/wp_api.js";
import { App, MainApp } from "./App.js";

document.addEventListener("DOMContentLoaded", App);

window.addEventListener("hashchange", (e) => {
   api.page = 1;
   MainApp();
});
