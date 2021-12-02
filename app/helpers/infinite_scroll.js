import api from "./wp_api.js";
import request from "./request.js";
import showLoader from "./loader.js";
import { Card as CardPost } from "../components/home/cards.js";
import { Card as CardSearch } from "../components/search/cards.js";


export async function infiniteScroll(){

    window.addEventListener("scroll", async (e) => {

        let query = localStorage.getItem("query"),
            apiUrl,
            Component,
            { hash } = location;

        let { scrollTop, clientHeight, scrollHeight } = document.documentElement;

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

            showLoader(true);

            await request({
                url: apiUrl,
                cbSuccess: (posts) => {
                    const postsContainer = document.querySelector("main .posts");
                    let html = "";

                    posts.forEach(post => html += Component(post));

                    postsContainer.insertAdjacentHTML("beforeend", html);

                    showLoader(false);
                }
            });

        }
    });
}