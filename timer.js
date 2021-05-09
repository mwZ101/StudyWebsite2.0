let isPaused = false;
let isReset = false;
let isOnStudy = true;
let isDone = false;
let wentBack = false;

function display_timer(option, studyDur, breakDur){
    document.getElementById('display-timer-id').style.display = "block";
    document.getElementById('select-timer-page-id').style.display = "none";
    let timer = document.getElementById('timer-id');
    let studyingMinutes;
    let breakMinutes;

    if(option.id === "option-1-id"){
        timer.textContent= "45:00";
        studyingMinutes = 45;
        breakMinutes = 15;
    }
    else if(option.id === "option-2-id"){
        timer.textContent= "50:00";
        studyingMinutes = 50;
        breakMinutes = 10;
    } else {
        timer.textContent= studyDur + ":" + "00";
        studyingMinutes = studyDur;
        breakMinutes = breakDur;

    }
    let breakTimeInSeconds= breakMinutes * 60;
    let studyTimeInSeconds = studyingMinutes * 60;
 
    let runningInterval = setInterval(updateCountDown, 1000);

    function updateCountDown(){
        if (wentBack) {
            wentBack = false;
            clearInterval(runningInterval);
            return;
        }

        if(isDone){
            document.getElementById('display-study-or-break-status-id').textContent = "You're done!";
            return;
        }
        if(isOnStudy){
            if(isReset){
                studyTimeInSeconds = studyingMinutes * 60;
            }
            if(!isPaused){
                console.log("We are not paused");
                studyTimeInSeconds--;

                if (studyTimeInSeconds === 0) {
                    ring();
                }

                if(studyTimeInSeconds === -1){
                    isOnStudy = false;
                }
                
            }     
            updateStudyCountDown(studyTimeInSeconds);
               
        } else {
            document.getElementById('display-study-or-break-status-id').textContent = "Break Time Remaining";
            if(isReset){
                breakTimeInSeconds = breakMinutes * 60;
            }
            if(!isPaused){
                console.log("We are not paused");
                breakTimeInSeconds--;

                if (breakTimeInSeconds <= 0) {
                    ring();
                }

                if(breakTimeInSeconds === -1){
                    isDone = true;
                    return;
                }
                
            }     
            updateBreakCountDown(breakTimeInSeconds);
        }
    }
}

function updateStudyCountDown(studyTimeInMinutes){
   
    console.log('isPaused is: ' + isPaused);
    console.log('isReset is: ' + isReset);

    let minutesRemaining = Math.floor(studyTimeInMinutes/60);
    let seconds = studyTimeInMinutes % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer-id').textContent = minutesRemaining+":"+seconds;
    console.log(minutesRemaining+":"+seconds);
}

function updateBreakCountDown(breakTimeInMinutes){
    console.log('isPaused is: ' + isPaused);
    console.log('isReset is: ' + isReset);

    let minutesRemaining = Math.floor(breakTimeInMinutes/60);
    let seconds = breakTimeInMinutes % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer-id').textContent = minutesRemaining+":"+seconds;
    console.log(minutesRemaining+":"+seconds);
}
function pauseOrContinue(){ 
    if(isPaused === true){
        isPaused = false;
        isReset = false;
        document.getElementById('button-pause-id').textContent = "Pause";
    } else {
        isPaused = true;
        document.getElementById('button-pause-id').textContent = "Continue";

    }
}

function reset(){
    if(isReset === true ){
        return;
    } 
    if(isReset === false && isPaused === true){
        isPaused = false;
    }
    isReset = true;
    pauseOrContinue();
}

function back(){
    wentBack = true;
    document.getElementById('display-timer-id').style.display = "none";
    document.getElementById('select-timer-page-id').style.display = "block";
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

    if (studyMin <= 0 || breakMin < 0) {
        document.getElementById("invalid-number-text").style.display = "block";

    } else {
        studyID.textContent = studyMin + " Minutes";
        breakID.textContent = breakMin + " Minutes";

        studyID.style.fontSize = "1.8vw";
        breakID.style.fontSize = "1.8vw";
        
        option3ID.setAttribute("onclick", "display_timer(this, " + studyMin + ", " + breakMin + ")");
        
        document.getElementById("invalid-number-text").style.display = "none";
        document.getElementById("pop-out").style.display = "none";
    }

    

    
}

function ring() {

    /* Credit for the alarm audio sound goes to Alexander from the OrangeFreeSounds Website */
    let alarmSound = new Audio("audio/Tea-bell-sound-effect.mp3");
    alarmSound.play();
}