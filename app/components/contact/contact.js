import contactMessage from "./message.js";

export default function Contact(){
    /*
    Build the contact section
    @param: object
    @return: html element 
    */

    const contact = document.createElement("form");
    
    contact.id = "contact";
    contact.classList.add("contact");

    // Submit event
    contact.addEventListener("submit", e =>{

        // Successful
        // sessionStorage.setItem("contact-visible", "off"); /* Uncomment this line */
        contact.innerHTML = contactMessage();

    });

    // Load content to display
    if(sessionStorage.getItem("contact-visible") === "on" ||
        sessionStorage.getItem("contact-visible") === null){
        contact.innerHTML = `
        <div class="contact-header">
            <h2 class="contact-title">Send me your message</h2>
        </div>
        <div class="contact-body">
            <div class="contact-email">
                <input type="email" name="email" id="email" placeholder="Email" autocomplete="off">
            </div>
            <textarea name="message" id="message" class="contact-message" placeholder="Write you message here..."></textarea>
            <button type="submit" class="contact-button">Send message</button>
        </div>
        `
    }else{
        contact.innerHTML = contactMessage();
    }

    return contact;
}