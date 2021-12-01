// Sirve para generar el contenido correspondiente de la seccion
// donde me encuentro

// Se realiza la invocacion de las peticiones

import api from "../helpers/wp_api.js";
import request from "../helpers/request.js";
import { Card as CardPost } from "./home/card.js";
import  Post from "./home/post.js";
import { Card as CardSearch} from "./search/card.js";
import Contact from "./contact/contact.js";


export async function Router(){

    const main = document.getElementById("main"),
        links = document.querySelectorAll("nav.menu > a");


    let { hash } = location;

    // Remove style of link
    links.forEach( link => link.classList.remove("active"));

    if(!hash){
        
        // Home
        await request({
            url:api.POSTS,
            cbSuccess: (posts) => {
                let postList = "";
                posts.forEach(post => {postList += CardPost(post)});

                main.innerHTML = postList;
            }
        })

        document.querySelector(`nav.menu > a[href="#"]`)
        .classList.add("active");

    }else if(hash.includes("#search")){
    
        // Search

        let query = localStorage.getItem("query");

        document.querySelector(`nav.menu > a[href="#search"]`)
        .classList.add("active");

        if(!query) {
            document.getElementById("loader").classList.add("d-none");
            main.innerHTML = "<h2>Please, write anything in the above box.</h2>"; 
            document.querySelector("#search > input").focus();
            return false;
        }

        await request({
            url:`${api.SEARCH}${query}`,
            cbSuccess: search => {

                if(search.length > 0){
                    // Results
                    let postList = "";
                    search.forEach(post => {
                        postList += CardSearch(post);
                    });

                    main.innerHTML = postList;
                }else{
                    // No results
                    main.innerHTML = "<h2>Results not found.</h2>"; 
                }
                
            }
        })

    }else if( hash === "#contact" ){
        
        // Contact
        main.appendChild(Contact());

        document.querySelector(`nav.menu > a[href="#contact"]`)
        .classList.add("active");
    
    }else{

        await request({
            url:`${api.POST}/${localStorage.getItem("post-id")}`,
            cbSuccess: (post) => {
                main.innerHTML = Post(post);
            }
        })
        
    }
    
    document.getElementById("loader").classList.add("d-none");
}
