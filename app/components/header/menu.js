export function Menu(){

    const menu = document.createElement("nav");

    menu.classList.add("menu");

    menu.innerHTML = `
        <a class="link" href="#" class="active" title="Home section">Home</a>
        <a class="link" href="#search" title="Search section">Search</a>
        <a class="link" href="#contact" title="Contact section">Contact</a>
    `;

    return menu;
}