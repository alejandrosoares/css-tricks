export function Search(){
    /*
    Build search
    @return: html element
    */
   
    const search = document.createElement("form"),
        input = document.createElement("input"),
        button = document.createElement("button");
    
    search.id = "search";
    search.classList.add("search");

    input.setAttribute("type", "search");
    input.setAttribute("name", "search");
    input.setAttribute("placeholder", "Search something of CSS");
    input.setAttribute("autocomplete", "off");
    input.setAttribute("name", "search");

    button.innerHTML = '<img src="app/assets/img/search.png" alt="Search" class="search-icon">';
    button.classList.add("search-button");
    button.type = "submit";

    search.appendChild(input);
    search.appendChild(button);

    if(location.hash.includes("#search")){
        input.value = localStorage.getItem("query");
    }

    search.addEventListener("submit", e =>{
      e.preventDefault();
      localStorage.setItem("query", input.value);
      location.hash = `#search?search=${input.value}`;
    });

    return search;   
}