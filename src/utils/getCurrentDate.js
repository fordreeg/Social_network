export default function getCurrentDate () {
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes() + 1,
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = String(date.getFullYear()).slice(2);
    
    return `${hours}:${minutes} ${day}.${month}.${year}`;
}