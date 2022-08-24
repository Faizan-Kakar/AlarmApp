console.log('hey how are you fine feeling well');
window.onload = showingAlarm()

// Adding the eventListener on Set Alarm button to play the audio 
let btn = document.getElementById('btn')
btn.addEventListener('click', setAlarm);
let alarmArray = [];
let counter = 0;
function setAlarm(e) {
    counter++;
    e.preventDefault(); //To prevent the form from submitting
    console.log('Setting the alarm');

    let inputAlarm = document.getElementById('inputAlarm'); //store the input from input tag to inputAlarm varialble

    let inputDate = new Date(inputAlarm.value);//converting the input from the user into date

    let alarm = localStorage.getItem('Alarm');

    if (alarm == null) {
        array = [];
    }
    else {
        array = JSON.parse(alarm)
    }
    array.push(inputDate);
    localStorage.setItem('Alarm', JSON.stringify(array));
    inputDate = '';

    showingAlarm();
}

// For showing the Alarm starts
function showingAlarm() {
    let alarm = localStorage.getItem('Alarm');

    if (alarm == null) {
        array = [];
    }
    else {
        array = JSON.parse(alarm)
    }

    let html = "";
    array.forEach((element, index) => {
        html += ` <div class="card mx-2 "  style="width: 18rem;">
             <div class="card-body">
             <h5 class="card-title">Alarm ${++index}</h5>
             <p class="card-text">${element}</p>
             <buttonid="${index}" onclick="deleteAlarm(this.id)" class="btn btn-primary">Delete Alarm</button>
             </div>
             </div>`


    })
    let alarmDiv = document.getElementById('alarmDiv');//Showing the alarm on setting the alarm
    alarmDiv.innerHTML = html;

    let inputAlarm = document.getElementById('inputAlarm'); //store the input from input tag to inputAlarm varialble

    let inputDate = new Date(inputAlarm.value);//converting the input from the user into date
    console.log('input date ' + inputDate);

    currentDate = new Date();// Getting the original date
    console.log('current date ' + currentDate);

    timeRemaining = inputDate - currentDate;
    console.log(timeRemaining);

    if (timeRemaining >= 0) {
        setTimeout(() => {
            var audio = new Audio('audio.mp3');
            audio.play();
            console.log('Ringing the bell');
            deletting();
        }, timeRemaining);
    }
}
// showingAlarm function end

// For deleting the Alarm when it rings start
function deletting() {
    console.log('the deleting function is called');
    let alarm = localStorage.getItem('Alarm');

    if (alarm == null) {
        array = [];
    }
    else {
        array = JSON.parse(alarm)
    }
    array.splice(0, 1)
    localStorage.setItem('Alarm', JSON.stringify(array));
    showingAlarm();
}
// deletting function ends

// For deleting the Alarm starts
function deleteAlarm(index) {
    console.log('delete alarm function is called');
    let alarm = localStorage.getItem('Alarm');

    if (alarm == null) {
        array = [];
    }
    else {
        array = JSON.parse(alarm)
    }
    array.splice(index, 1)
    localStorage.setItem('Alarm', JSON.stringify(array));
    showingAlarm();

}
// deletingAlarm ends

// The code for the analog clock portion starts
setInterval(() => {
    d = new Date();
    var hTime = d.getHours();
    var mTime = d.getMinutes();
    var sTime = d.getSeconds();

    var hRotation = 30 * hTime + mTime / 2;
    var mRotation = mTime * 6;
    var sRotation = sTime * 6;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);
// Analog clock end

// This code is for showing the Digital clock starts
var time = new Date();
var hrs = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
var session = document.getElementById("session");

if (hrs > 12) {
    hrs = hrs - 12;
}
if (hrs > 12) {
    session.innerHTML = "AM";
}
else {
    session.innerHTML = "PM";
}

document.getElementById("hours").innerHTML = hrs;
document.getElementById("minutes").innerHTML = min;
document.getElementById("seconds").innerHTML = sec;
// Digital clock end
