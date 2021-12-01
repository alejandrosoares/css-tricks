export function Search(){
    
    const search = document.createElement("form"),
        input = document.createElement("input"),
        button = document.createElement("button");
    
    search.id = "search";
    search.classList.add("search");

    input.setAttribute("type", "search");
    input.setAttribute("name", "search");
    input.setAttribute("placeholder", "Search something of CSS");
    input.setAttribute("autocompleted", "off");
    input.setAttribute("name", "search");

    button.type = "reset";
    button.textContent = "X";

    search.appendChild(input);
    search.appendChild(button);

    if(location.hash.includes("#search")){
        input.value = localStorage.getItem("query");
    }

    button.addEventListener("click", e =>{
        localStorage.removeItem("query");
    })

    // Submit event
    search.addEventListener("submit", e =>{
      e.preventDefault();
      localStorage.setItem("query", input.value);
      location.hash = `#search?search=${input.value}`;
    });

    return search;
}