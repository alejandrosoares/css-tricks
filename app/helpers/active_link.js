/*
    Add style to active link
*/

export default function activeLink(hash){
   const links = document.querySelectorAll("nav.menu > a"),
        activeLink = document.querySelector(`nav.menu > a[href="#${hash}"]`);
    
   links.forEach( link => link.classList.remove("active"));
   activeLink.classList.add("active");
}