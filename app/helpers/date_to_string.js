const formatMinutes = (min) => {

    let m = min.toString();

    return (m.length === 1)? `0${m}`: m;
}

const dateToString = (date) => {
    /*
    Receive date with format 2021-11-30T09:26:35
    and return date with format 30.11.2021 9:26
    @param: str 
    @return str
    */

    const d = new Date(date),
        minutes = formatMinutes(d.getMinutes());

    let dateString = `
            ${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} 
             ${d.getHours()}:${minutes}
            `;

    return dateString;
}


export default dateToString;