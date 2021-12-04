export default function verifyDarkMode(){

    const darkMode = localStorage.getItem("dark-mode");

    return (darkMode === "true")? true: false;
}

