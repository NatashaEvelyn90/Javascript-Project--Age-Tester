//TODO create an audio to play when selecting birthday

const audio = document.querySelector("#music");

//! Auto plays when CLICKING oo calendar icon
//TODO future you: "Figure out how to stop audio from constantly starting over when icon is pressed!"

function autoPlay() {
    audio.autoplay = true;
    audio.load();
}

//! stops audio when pressing red pause button in FOOTER
function stopPlay() {
    audio.autoplay = false;
    audio.load();
}

//! Age verfication
//? Googled code and still having hard time understanding. 
//TODO future you: "Sit down, and understand how Date() works and figure out what .value means!"

function verifyAge() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();

    let moreDate = document.querySelector("#birthday").value;
    let dt = new Date(moreDate);
    let dys = dt.getUTCDate();
    let mth = dt.getUTCMonth()+1;
    let yrs = dt.getUTCFullYear();

    let acceptance = document.querySelector("#joined");

    if (year - yrs < 18) {
        acceptance.innerHTML = "Try again in a few years!"
    } else if (year - yrs > 18) {
        acceptance.innerHTML = "Welcome to the Turks."
    } else if (month < mth) {
        acceptance.innerHTML = "Try again in a few years!"
    } else if (month > mth) {
        acceptance.innerHTML = "Welcome to the Turks."
    } else if (day <= dys) {
        acceptance.innerHTML = "Try again in a few years!"
    } else if (day >= dys) {
        acceptance.innerHTML = "Welcome to the Turks."
    } else {
        acceptance.innerHTML = "Really? Don't play games with the Turks. Select your birthday."
    }
    
}
