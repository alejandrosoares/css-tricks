import { Title } from "./title.js";
import { Menu } from "./menu.js";
import { Search } from "../search/search.js";

export function Header(){

    const header = document.createElement("header");

    header.classList.add("header");
    header.appendChild(Title());
    header.appendChild(Menu());
    header.appendChild(Search());

    return header;
}