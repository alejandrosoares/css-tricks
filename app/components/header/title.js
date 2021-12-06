import api from "../../helpers/wp_api.js";

export function Title(){

    const title = document.createElement("h1");

    title.innerHTML = `
        <div class="title">
            <a href="${api.DOMAIN}" target="_blank" rel="noopener" title="Go to ${api.DOMAIN}">
                ${api.NAME.toUpperCase()}
            </a>
        </div>
    `
    return title;
}