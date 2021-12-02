import api from "./wp_api.js";
import request from "./request.js";
import { Card as CardPost } from "../components/home/cards.js";
import { Card as CardSearch } from "../components/search/card.js";

export async function infiniteScroll(){
    let query = localStorage.getItem("query"),
    apiUrl,
    Component;

    window.addEventListener("scroll", async (e) =>{

        let { scrollTop, clientHeight, scrollHeight} = document.documentElement;
        let { hash } = location;

        if(scrollTop + clientHeight >= scrollHeight){
            api.page++;

            if(hash === ""){
                // Home
                apiUrl = `${api.POSTS}&page=${api.page}`;
                Component = CardPost;
            }else if(hash.includes("#search")){
                // Search
                apiUrl = `${api.SEARCH}${query}&page=${api.page}`;
                Component = CardSearch;
            }else{
                return false;
            }

            document.getElementById("loader")
                .classList.remove("d-none");

            await request({
                url: apiUrl,
                cbSuccess: (posts) => {
                    let html = "";
                    posts.forEach(post => html += Component(post));

                    document.getElementById("main")
                        .insertAdjacentHTML("beforeend", html);

                    document.getElementById("loader")
                        .classList.add("d-none");
                }
            });

        }
    });
}