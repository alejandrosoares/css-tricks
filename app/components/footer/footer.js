export function Footer() {
   /*
    Buil the footer
    @param: object
    */
   const footer = document.createElement("div");

   footer.classList.add("footer");

   footer.innerHTML = `
        <div> Icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    `;
   return footer;
}
