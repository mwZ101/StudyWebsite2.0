

function display_timer(option){
    if(option.id === "option-1-id"){
        // display 45
    }
    else if(option.id === "option-2-id"){
        // we know its 50 
    } else {
        //document.getElementById('pop-out-box').timerStyle.display = "block";
    }
}

// const option3 = document.querySelector('option-3');
// option3.addEventListener('click', open_custom_timer());

function open_custom_timer() {
    document.getElementById("pop-out").style.display = "block";
}

function close_custom_timer() {
    document.getElementById("pop-out").style.display = "none";
}

function save_input() {
    let studyMin = document.getElementById("study-minutes-id").value;
    let breakMin = document.getElementById("break-minutes-id").value;
    
    document.getElementById("custom-text-study-id").textContent = studyMin + " Minutes";
    document.getElementById("custom-text-break-id").textContent = breakMin + " Minutes";

    document.getElementById("custom-text-study-id").style.fontSize = "1.8vw";
    document.getElementById("custom-text-break-id").style.fontSize = "1.8vw";
    
    
    document.getElementById("pop-out").style.display = "none";
}