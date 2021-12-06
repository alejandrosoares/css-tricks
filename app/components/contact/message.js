export default function contactMessage(response) {
   /*
    Put the message inside the contact div depending on the HTTP response
    @param: object
    */
   const contact = document.getElementById("contact");

   if (response.success === "true") {
      contact.innerHTML = `
            <div class="contact-message">
                <h2><img src="app/assets/img/check.png" alt="Icon"> Your messsage has been send successful</h2>
            </div>
        `;
      sessionStorage.setItem("contact-visible", "off");
   } else {
      contact.innerHTML = `
            <div class="contact-message">
                <h2><img src="app/assets/img/fail.png" alt="Icon"> Something went wrong. <br> Please, reload page and try again.</h2>
            </div>
        `;
   }
}
