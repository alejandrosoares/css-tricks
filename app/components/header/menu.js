export function Menu(){

    const menu = document.createElement("nav");

    menu.classList.add("menu");

    menu.innerHTML = `
        <a class="link" href="#" class="active">Home</a>
        <a class="link" href="#search">Search</a>
        <a class="link" href="#contact">Contact</a>
    `;

    return menu;
}