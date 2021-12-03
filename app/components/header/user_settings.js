function fastMode(active){
    localStorage.setItem('fast-mode', active);
    location.reload();
}

function darkMode(active){
    localStorage.setItem('dark-mode', active);
    location.reload();
}

const userSettings = () => {
    window.addEventListener('click', e => {

        // click in btn of conf
        if(e.target.matches('.conf-icon *')){
            const iconDiv = e.target.closest('.conf-icon'),
                status = iconDiv.getAttribute("data-status"),
                parentDiv = iconDiv.parentNode,
                confOptions = parentDiv.querySelector('.conf-options');
            
            if(status === "hide"){
                console.log("show conf")
                confOptions.classList.remove('d-none');
                iconDiv.setAttribute('data-status', "show");
            }else{
                confOptions.classList.add('d-none');
                iconDiv.setAttribute('data-status', "hide");
            }

            console.log("click in conf")

        }else{
            // Click in window
            if(!e.target.matches('.conf-options *')){

                const iconDiv = document.querySelector('.conf-icon'),
                status = iconDiv.getAttribute("data-status");
        
                if(status == "show"){
                    const confOptions = document.querySelector('.conf-options');

                    confOptions.classList.add('d-none');

                    iconDiv.setAttribute('data-status', "hide");
                }
            }
            
        }

        // click in fast mode switch
        if(e.target.matches('.fast-mode .switch *')){
            const fastModeDiv = e.target.closest('.fast-mode'),
                input = fastModeDiv.querySelector('input[type="checkbox"]');

                fastMode(input.checked);
        }

        // Click in dark mode
        if(e.target.matches('.dark-mode .switch *')){
            const darkModeDiv = e.target.closest('.dark-mode'),
                input = darkModeDiv.querySelector('input[type="checkbox"]');

                darkMode(input.checked);
        }
    })
}

export { userSettings };
