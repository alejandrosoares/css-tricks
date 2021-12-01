const dateToString = (date) => {

    const d = new Date(date);

    let dateString = `
            ${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} 
             ${d.getHours()}:${d.getMinutes()}
            `;

    return dateString;
}


export default dateToString;