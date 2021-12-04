export default function verifyFastMode(){

    const fastMode = localStorage.getItem("fast-mode");

    return (fastMode === "true")? true: false;
}
