let isPaused = false;
let isReset = false;

function display_timer(option, studyDur, breakDur){
    let timer = document.getElementById('timer-id');
    let startingMinutes;
    if(option.id === "option-1-id"){
        timer.textContent= "45:00";
        startingMinutes = 45;
    }
    else if(option.id === "option-2-id"){
        timer.textContent= "50:00";
        startingMinutes = 50;
    } else {
        timer.textContent= studyDur + ":" + breakDur;
        startingMinutes = studyDur;
    }

    let time = startingMinutes * 60;
    setInterval(updateCountdown, 1000);

    function updateCountdown(){
        if(isReset){
            document.getElementById('button-pause-id').textContent = "Continue";
        } 
        
        if(!isPaused){
            let minutesRemaining = Math.floor(time/60);
            let seconds = time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds;
            timer.textContent = minutesRemaining+":"+seconds;
            console.log(minutesRemaining+":"+seconds);
            time--;
        }
    }
}

function pause(){ 
    if(document.getElementById('button-pause-id').textContent === "Continue"){
        document.getElementById('button-pause-id').textContent = "Pause";
    }
    isPaused = isPaused ? false : true;
}

function reset(){
    isReset= isReset ? false : true;
    isPaused = isPaused ? false : true;
}

function open_custom_timer() {
    document.getElementById("pop-out").style.display = "block";
}

function close_custom_timer() {
    document.getElementById("pop-out").style.display = "none";
}

function save_input() {
    let studyMin = document.getElementById("study-minutes-id").value;
    let breakMin = document.getElementById("break-minutes-id").value;
    
    let studyID = document.getElementById("custom-text-study-id");
    let breakID = document.getElementById("custom-text-break-id");

    let option3ID = document.getElementById("option-3-id");

    studyID.textContent = studyMin + " Minutes";
    breakID.textContent = breakMin + " Minutes";

    studyID.style.fontSize = "1.8vw";
    breakID.style.fontSize = "1.8vw";
    
    option3ID.setAttribute("onclick", "display_timer(this, " + studyMin + ", " + breakMin + ")");

    document.getElementById("pop-out").style.display = "none";
}