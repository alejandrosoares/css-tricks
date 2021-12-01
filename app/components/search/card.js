import api from "../../helpers/wp_api.js";

export function Card(props){

    const { _embedded, id, url, title } = props;

    const date =  _embedded.self[0].date,
        dateFormat = new Date(date).toLocaleString();

    const slug = url.replace("", api.DOMAIN);

    document.addEventListener("click", (e) => {

        if(!e.target.matches(".post > p > a")) return false;

        localStorage.setItem("post-id", e.target.getAttribute("data-id"));
    });

    return `
        <article class="post">
            <span class="title">${title}</span>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}">See publication</a>
            </p>
        </article>
    `;
}