export function Card(props){

    const { id, date, slug, title, _embedded } = props;

    const dateFormat = new Date(date).toLocaleString();

    const img = _embedded["wp:featuredmedia"]
    ?_embedded["wp:featuredmedia"][0].source_url
    : "app/assets/not-found.png";

    document.addEventListener("click", (e) => {

        if(!e.target.matches(".post > p > a")) return false;

        localStorage.setItem("post-id", e.target.getAttribute("data-id"));
    });

    return `
        <article class="post">
            <img src="${img}" alt="${title.rendered}">
            <span class="title">${title.rendered}</span>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}">See publication</a>
            </p>
        </article>
    `;
}