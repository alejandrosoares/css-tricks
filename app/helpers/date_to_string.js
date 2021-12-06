const formatMinutes = (min) => {
   /*
    Format minutes, if is 6 return 06
    @param: int
    @return: str
    */

   return min < 10 ? `0${min}` : `${min}`;
};

export default function dateToString(date) {
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
