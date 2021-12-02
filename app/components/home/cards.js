import dateToString from "../../helpers/date_to_string.js";

export function Card(props){
    /*
    Buil card that go inside the div.posts
    @param: object
    @return: str
    */

    const { id, date, slug, title, _embedded } = props,
        dateFormat = dateToString(date);

    const img = _embedded["wp:featuredmedia"]
        ? _embedded["wp:featuredmedia"][0].source_url
        : "app/assets/not-found.png";

    document.addEventListener("click", (e) => {

        if(!e.target.matches(".post > .to-publication")) return false;

        localStorage.setItem("post-id", e.target.getAttribute("data-id"));
    });

    return `
        <article class="post">
            <div class="post-header">
                <div class="post-image">   
                    <img src="${img}" alt="${title.rendered}">
                </div>
                <p class="post-title">${title.rendered}</p>
            </div>
            <div class="post-info">
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}" class="post-link">See publication</a>
            </div>
        </article>
    `;
}

export default function homeCards(posts){
    /*
    Buil div.posts and return it
    @param: object
    @return: html element 
    */

    const divContainer = document.createElement("div");
    let postList = "";

    posts.forEach(post => {postList += Card(post)});

    divContainer.classList.add("posts");
    divContainer.innerHTML = postList;
    
    return divContainer;
}