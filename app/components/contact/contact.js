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

    // // Keyup event
    // contact.addEventListener("keyup", e => {

    //     if(e.target.name === "email"){
    //         const patt = /^[a-zA-Z0-9._-]+@$/;
                
    //         if(patt.test(e.target.value)){
    //             document.querySelector("#contact ul.list")
    //                 .classList.remove("d-none");

    //             console.log("event ", e)
    //             switch(e.keyCode){

    //                 case 40:{
    //                     let currentLi = contact.querySelector("ul.list > li.active");
                
    //                     if(currentLi === null){
    //                             contact.querySelector('ul.list > li[data-index="0"]')
    //                             .classList.add("active");
    //                     }else{
    //                         let index = parseInt(currentLi.getAttribute("data-index"));

    //                         currentLi.classList.remove("active");

    //                         (index == 3)? index = 0: index = index + 1;

    //                         contact.querySelector(`ul.list > li[data-index="${index}"]`)
    //                             .classList.add("active");
    //                     }
    //                     break;
    //                 }

    //                 case 38:{
    //                     let currentLi = contact.querySelector("ul.list > li.active");
                    
    //                     if(currentLi === null){
    //                             contact.querySelector('ul.list > li[data-index="3"]')
    //                                 .classList.add("active");
    //                     }else{
    //                         let index = parseInt(currentLi.getAttribute("data-index"));

    //                         currentLi.classList.remove("active");

    //                         (index == 0)? index = 3: index = index - 1;

    //                         contact.querySelector(`ul.list > li[data-index="${index}"]`)
    //                             .classList.add("active");

    //                     }
                        
    //                     break;
    //                 }

    //                 case 39:{
    //                     let currentLi = contact.querySelector("ul.list > li.active");

    //                     if(currentLi){
    //                         const inputEmail = document.getElementById("email");

    //                         inputEmail.value = `${inputEmail.value}${currentLi.getAttribute("data-value")}`;
    //                     }

    //                     break;
    //                 }

    //                 default:{ 
    //                     break;
    //                 }
    //             }

    //         }else{
    //             document.querySelector("#contact ul.list")
    //                 .classList.add("d-none"); 
    //         }
    //     }
    // });

    

    // // Click event
    // contact.addEventListener("click", e => {
    //     const links = contact.querySelectorAll("ul.list > a");
        
    //     if(e.target.matches("#contact ul.list > li")){
    //         const inputEmail = document.getElementById("email");
            
    //         inputEmail.value = `${inputEmail.value}${e.target.getAttribute("data-value")}`;

    //         document.querySelector("#contact ul.list")
    //             .classList.add("d-none"); 
    //     }
    // })

    // Load content to display
    if(sessionStorage.getItem("contact-visible") === "on" ||
        sessionStorage.getItem("contact-visible") === null){
        contact.innerHTML = `
            <div class="contact-header">
                <h2 class="contact-title">Send me your message</h2>
            </div>
            <div class="contact-body">
                <div class="contact-email">
                    <input type="email" name="email" id="email" placeholder="Email" autocomplete="off" required>
                </div>
                <textarea name="message" id="message" class="contact-msg" placeholder="Write you message here..." required></textarea>
                <button type="submit" class="contact-button">Send message</button>
            </div>
        `
    }else{
        contact.innerHTML = contactMessage();
    }

    return contact;
}