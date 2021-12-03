import api from "../helpers/wp_api.js";
import request from "../helpers/request.js";
import activeLink from "../helpers/active_link.js";
import showLoader from "../helpers/loader.js";
import homeCards from "./home/cards.js";
import  Post from "./home/post.js";
import searchCards, { Card as CardSearch} from "./search/cards.js";
import Contact from "./contact/contact.js";


export async function Router(){

    const main = document.getElementById("main"),
        options = {};

    let { hash } = location;

    if(!hash){
        // Home

        activeLink('');
        
        await request({
            url: api.POSTS,
            cbSuccess: posts => { main.appendChild(homeCards(posts)) },
            options
        })

    }else if(hash.includes("#search")){
        // Search

        let query = localStorage.getItem("query");

        activeLink('search');

        if(!query) {

            main.innerHTML = "<h2>What new CSS trick are you looking for?</h2>"; 
            document.querySelector("#search > input").focus();
            return false;
        }

        await request({
            url: `${api.SEARCH}${query}`,
            cbSuccess: posts => { main.appendChild(searchCards(posts)) },
            options
        })

    }else if( hash === "#contact" ){
        // Contact

        activeLink('contact');
        main.appendChild(Contact()); 
    }else{

        await request({
            url: `${api.POST}/${localStorage.getItem("post-id")}`,
            cbSuccess: post => { main.innerHTML = Post(post) }
        })
        
    }
    
    showLoader(false);
}
