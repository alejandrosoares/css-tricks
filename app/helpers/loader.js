export default function showLoader(show){
    /*
    Show or Hide loader
    @param: bool
    */
   
    const loader = document.getElementById("loader");

    (show)
        ? loader.classList.remove("d-none")
        : loader.classList.add("d-none");
}