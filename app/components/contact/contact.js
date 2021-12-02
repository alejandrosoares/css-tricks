import contactMessage from "./message.js";

export default function Contact(){
    
    const contact = document.createElement("form");
    
    contact.id = "contact";
    contact.classList.add("contact");

    // Keyup event
    contact.addEventListener("keyup", e => {

        if(e.target.name === "email"){
            const patt = /^[a-zA-Z0-9._-]+@$/;
                
            if(patt.test(e.target.value)){
                document.querySelector("#contact ul.list")
                    .classList.remove("d-none");

                console.log(e)
                switch(e.keyCode){

                    case 40:{
                        let currentLi = contact.querySelector("ul.list > li.active");
                
                        if(currentLi === null){
                                contact.querySelector('ul.list > li[data-index="0"]')
                                .classList.add("active");
                        }else{
                            let index = parseInt(currentLi.getAttribute("data-index"));

                            currentLi.classList.remove("active");

                            (index == 3)? index = 0: index = index + 1;

                            contact.querySelector(`ul.list > li[data-index="${index}"]`)
                                .classList.add("active");
                        }
                        break;
                    }

                    case 38:{
                        let currentLi = contact.querySelector("ul.list > li.active");
                    
                        if(currentLi === null){
                                contact.querySelector('ul.list > li[data-index="3"]')
                                    .classList.add("active");
                        }else{
                            let index = parseInt(currentLi.getAttribute("data-index"));

                            currentLi.classList.remove("active");

                            (index == 0)? index = 3: index = index - 1;

                            contact.querySelector(`ul.list > li[data-index="${index}"]`)
                                .classList.add("active");

                        }
                        
                        break;
                    }

                    case 39:{
                        let currentLi = contact.querySelector("ul.list > li.active");

                        if(currentLi){
                            const inputEmail = document.getElementById("email");

                            inputEmail.value = `${inputEmail.value}${currentLi.getAttribute("data-value")}`;
                        }

                        break;
                    }

                    default:{ 
                        break;
                    }
                }

            }else{
                document.querySelector("#contact ul.list")
                    .classList.add("d-none"); 
            }
        }
    });

    // Submit event
    contact.addEventListener("submit", e =>{

        // Successful
        // sessionStorage.setItem("contact-visible", "off");
        contact.innerHTML = contactMessage();

    });

    // Click event
    contact.addEventListener("click", e => {
        const links = contact.querySelectorAll("ul.list > a");
        
        if(e.target.matches("#contact ul.list > li")){
            const inputEmail = document.getElementById("email");
            
            inputEmail.value = `${inputEmail.value}${e.target.getAttribute("data-value")}`;

            document.querySelector("#contact ul.list")
                .classList.add("d-none"); 
        }
    })


    if(sessionStorage.getItem("contact-visible") === "on" ||
        sessionStorage.getItem("contact-visible") === null){
        contact.innerHTML = `
            <h2>Send me your message</h2>
            <div class="email-container">
                <input type="email" name="email" id="email" placeholder="Email" autocomplete="off">
                <ul class="list d-none">
                    <li class="" data-index="0" data-value="gmail.com">@gmail.com</li>
                    <li data-index="1" data-value="outlook.com">@outlook.com</li>
                    <li data-index="2" data-value="hotmail.com">@hotmail.com</li>
                    <li data-index="3" data-value="hotmail.com">@yahoo.com</li>
                </ul>
            </div>
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Write you message here..."></textarea>
            <button type="submit">Send Message</button>
        `
    }else{
        contact.innerHTML = contactMessage();
    }

    return contact;
}