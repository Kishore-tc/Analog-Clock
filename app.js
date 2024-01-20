setInterval(setClock, 1000);
const digital=document.querySelector('#digital');
const hourHand=document.querySelector('[data-hour]');
const minuteHand=document.querySelector('[data-min]');
const secondsHand=document.querySelector('[data-sec]');
function setClock(){
    const currentDate=new Date();
    const secondsRatio= currentDate.getSeconds()/60;
    const minutesRatio= (secondsRatio+currentDate.getMinutes())/60;
    const hoursRatio=(minutesRatio+currentDate.getHours())/12;
    setRotation(secondsHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
    let AMPM='';
    AMPM=currentDate.getHours()>12 ? 'PM' : 'AM';
    digital.innerText=` ${currentDate.getHours()%12} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}  ${AMPM}`;
}
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360);
}
setClock();