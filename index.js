
/*const mobileID = document.getElementById('mobile-bar');
mobileID.style.display = 'none';

function myFunction(){
   
    if (mobileID.style.display == 'none')
     {
        mobileID.style.display= 'block';
    }
    else{
        mobileID.style.display = 'none';
    }
}*/


const mobileID = document.getElementById('mobile-bar');

mobileID.style.maxHeight = '0px';

function myFunction(){
    if (mobileID.style.maxHeight == '0px') 
    {
        
        mobileID.style.maxHeight = '200px';
    }
    else{
        mobileID.style.maxHeight = '0px';
    }
}


const time = document.querySelector('.digitalTime')

function timeNow() {
    periodInterval = ''
    notedHours = 0
    notedMinutes = 0
    notedSeconds = 0


    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds  = date.getSeconds()
    const militime = Math.floor(date.getMilliseconds()/100)

    if (seconds < 10) {
        notedSeconds = `0${seconds}`
    }else{
        notedSeconds = seconds
    }

    if(minutes < 10){
        notedMinutes = `0${minutes}`
    }else{
        notedMinutes = minutes
    }

    if (hours < 10) {
        notedHours = `0${hours}`
    }else{
        notedHours = hours
    }

    if (hours > 12 && hours <= 24) {
        notedHours = notedHours - 12

        periodInterval = "PM"
    }

    if (hours < 12 && hours >= 0) {
        periodInterval = "AM"
    }

    currentTime = `${notedHours}:${notedMinutes}:${notedSeconds} ${periodInterval}`
    time.textContent = currentTime;
}

setInterval(() => {
    timeNow();
}, 10);