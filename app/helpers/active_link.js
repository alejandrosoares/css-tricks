export default function activeLink(hash){
    /*
    Add style to active link
    @param: str
    */
   const links = document.querySelectorAll("nav.menu > a"),
        activeLink = document.querySelector(`nav.menu > a[href="#${hash}"]`);
    
   links.forEach( link => link.classList.remove("active"));
   activeLink.classList.add("active");
}
