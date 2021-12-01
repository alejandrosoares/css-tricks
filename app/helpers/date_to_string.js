const formatMinutes = (min) => {

    let m = min.toString();

    return (m.length === 1)? `0${m}`: m;
}

const dateToString = (date) => {

    const d = new Date(date),
        minutes = formatMinutes(d.getMinutes());

    let dateString = `
            ${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} 
             ${d.getHours()}:${minutes}
            `;

    return dateString;
}


export default dateToString;