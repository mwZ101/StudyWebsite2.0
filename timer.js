

function display_timer(option){
    if(option.id === "option-1-id"){
        // display 45
    }
    else if(option.id === "option-2-id"){
        // we know its 50 
    } else {
        document.getElementById('pop-out-box').timerStyle.display = "block";
    }
}

const option3= document.querySelector('option-3');
option3.addEventListener('click', function(){
    option3.classList.toggle('boop');
});

function open_custom_timer(){
    document.getElementById('pop-out-container').timerStyle.display = "flex";
}

function close_custom_timer(){
    document.getElementById('pop-out-container').timerStyle.display = "none";
}