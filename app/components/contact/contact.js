import global from "../../helpers/global.js";
import contactMessage from "./message.js";
import request from "../../helpers/request.js";

function addLoaderInButton() {
   /*
    Add the loader inside of button:submit and disabled this
    */
   const button = document.querySelector("#contact .contact-button");

   button.innerHTML = `
        Send message
        <img src="app/assets/img/loader-white.svg" class="contact-button-loader" alt="Sending Email">
    `;
   button.setAttribute("disabled", true);
   button.classList.add("contact-button-disabled");
}

export default function Contact() {
   /*
    Build the contact section
    @param: object
    @return: html element 
    */

   const contact = document.createElement("form");

   contact.id = "contact";
   contact.classList.add("contact");
   contact.setAttribute("onsubmit", "return false");
   
   if(global.DARK_MODE) contact.classList.add("contact-dark-mode");

   

   // Submit event
   contact.addEventListener("submit", (e) => {
      // Successful
      const email = document.querySelector("#contact .email"),
         message = document.querySelector("#contact .contact-msg");

      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
         body: JSON.stringify({
            name: "SPA - CSS TRICKS",
            email: email.value,
            message: message.value,
         }),
      };

      request({
         url: "https://formsubmit.co/ajax/acb7a209b874e7ea2959381b355647c8",
         cbSuccess: contactMessage,
         options,
      });

      addLoaderInButton();
   });

   // Load content to display
   if (sessionStorage.getItem("contact-visible") === "off") {
      contact.innerHTML = `
            <div class="contact-message">
                <h2><img src="app/assets/img/check.png" alt="Icon"> Your messsage has been send successful</h2>
            </div>
        `;
   } else {
      contact.innerHTML = `
            <div class="contact-header">
                <h2 class="contact-title">Send me your message</h2>
            </div>
            <div class="contact-body">
                <div class="contact-email">
                    <input type="email" name="email" class="email" placeholder="Email" autocomplete="off" required>
                </div>
                <textarea name="message" class="contact-msg" placeholder="Write you message here..." minlength="10" required></textarea>
                <button type="submit" class="contact-button">Send message</button>
            </div>
        `;
   }

   return contact;
}
