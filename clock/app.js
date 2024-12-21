
const milisHandle = document.querySelector('.handle__milis');
const secondHandle = document.querySelector('.handle__second');
const minuteHandle = document.querySelector('.handle__minute');
const hourHandle = document.querySelector('.handle__hour');

requestAnimationFrame(setHandles);
// setInterval(() => {
//     setHandles()
// }, 1000) 

function setHandles() {
    const d = new Date();

    const hours = d.getHours() - 12;
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const milis = d.getMilliseconds();

    const extraMinutesAngle = seconds * 0.1;
    const mintuesAngle = minutes * 6 + extraMinutesAngle;
    
    const extraHoursAngle = minutes * 0.5;
    const hoursAngle = hours * 30 + extraHoursAngle;
    
    hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
    minuteHandle.style.transform = `translateX(-50%) rotate(${mintuesAngle}deg)`;
    secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
    milisHandle.style.transform = `translateX(-50%) rotate(${milis * .36}deg)`;
    requestAnimationFrame(setHandles);
}
