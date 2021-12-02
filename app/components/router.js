import api from "../helpers/wp_api.js";
import request from "../helpers/request.js";
import homeCards from "./home/cards.js";
import  Post from "./home/post.js";
import { Card as CardSearch} from "./search/card.js";
import Contact from "./contact/contact.js";
import activeLink from "../helpers/active_link.js";


export async function Router(){

    const main = document.getElementById("main");

    let { hash } = location;

    if(!hash){
        
        // Home
        await request({
            url: api.POSTS,
            cbSuccess: (posts) => {
                main.appendChild(homeCards(posts));
            }
        })

        activeLink('');

    }else if(hash.includes("#search")){
    
        // Search

        let query = localStorage.getItem("query");

        activeLink('search');

        if(!query) {
            document.getElementById("loader").classList.add("d-none");
            main.innerHTML = "<h2>What new CSS trick are you looking for?</h2>"; 
            document.querySelector("#search > input").focus();
            return false;
        }

        await request({
            url: `${api.SEARCH}${query}`,
            cbSuccess: search => {

                if(search.length > 0){
                    // Results
                    let postList = "";
                    search.forEach(post => {
                        postList += CardSearch(post);
                    });
                    main.innerHTML = "";
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

        activeLink('contact');
    
    }else{

        await request({
            url: `${api.POST}/${localStorage.getItem("post-id")}`,
            cbSuccess: (post) => {
                main.innerHTML = Post(post);
            }
        })
        
    }
    
    document.getElementById("loader").classList.add("d-none");
}
