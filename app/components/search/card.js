import api from "../../helpers/wp_api.js";
import dateToString from "../../helpers/date_to_string.js";

export function Card(props){

    const { _embedded, id, url, title } = props;

    const date = _embedded.self[0].date,
        dateFormat = dateToString(date);

    const slug = url.replace("", api.DOMAIN);

    document.addEventListener("click", (e) => {

        if(!e.target.matches(".post > p > a")) return false;

        localStorage.setItem("post-id", e.target.getAttribute("data-id"));
    });

    return `
        <article class="post">
            <div class="post-header">
                <p class="post-title">${title}</p>
            </div>
            <div class="post-info">
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}" class="post-link">See publication</a>
            </div>
        </article>
    `;
}

export function Cards(posts){
    const divContainer = document.createElement("div");
    let postList = "";

    divContainer.classList.add("posts");
    
    posts.forEach(post => {postList += Card(post)});

    divContainer.innerHTML = postList;

    return divContainer;
}