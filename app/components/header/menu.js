export function Menu() {
   /*
    Buil the menu with the links
    @return: html element 
    */
   const menu = document.createElement("nav");

   menu.classList.add("menu");

   menu.innerHTML = `
        <a class="link" href="#" class="active" title="Home section">Home</a>
        <a class="link" href="#search" title="Search section">Search</a>
        <a class="link" href="#contact" title="Contact section">Contact</a>
    `;

   return menu;
}
