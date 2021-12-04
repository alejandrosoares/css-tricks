export function Footer(){

    const footer = document.createElement("div");

    footer.classList.add("footer")

    footer.innerHTML = `
        <div> Icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    `
    return footer;
}