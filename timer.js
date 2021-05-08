

function display_timer(option, studyDur, breakDur){
    
    if(option.id === "option-1-id"){
        // display 45
    }
    else if(option.id === "option-2-id"){
        // we know its 50 
    } else {
        //custom
    }
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
    
    option3ID.setAttribute("onclick", "displayTimer(this, " + studyMin + ", " + breakMin + ")");

    document.getElementById("pop-out").style.display = "none";
}