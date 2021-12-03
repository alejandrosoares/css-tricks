import api from "../../helpers/wp_api.js";
import dateToString from "../../helpers/date_to_string.js";
import classNumberIterator from "../../helpers/get_number_class.js";


export function Card(props){
    /*
    Buil card that go inside the div.posts
    @param: object
    @return: str
    */
   
    const { _embedded, id, url, title } = props;

    const date = _embedded.self[0].date,
        dateFormat = dateToString(date),
        slug = url.replace("", api.DOMAIN),
        postClass = `post-figure-${classNumberIterator.next().value}`;

    document.addEventListener("click", (e) => {

        if(!e.target.matches(".post .post-link")) return false;

        localStorage.setItem("post-id", e.target.getAttribute("data-id"));
    });



    return `
        <article class="post">
            <div class="post-header">
                <div class="post-figure ${postClass}">   
                    <span>CSS</span>
                </div>
                <p class="post-title">${title}</p>
            </div>
            <div class="post-info">
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}" class="post-link">See publication</a>
            </div>
        </article>
    `;
}


export default function searchCards(posts){
    /*
    Buil div.posts and return it
    @param: object
    @return: html element 
    */

    const divContainer = document.createElement("div");

    divContainer.classList.add("posts");

    if(posts.length > 0){
        // Results
        let postList = "";

        posts.forEach(post => { postList += Card(post) });

        divContainer.innerHTML = postList;
    }else{
        // No results
        divContainer.innerHTML = `<h2>Results not found with <b>${query}</b>.</h2>`; 
    }

    return divContainer;
}