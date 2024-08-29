//Create Variables to get values from user's input
var hoursInput = document.getElementById("hoursInput");
var minutesInput = document.getElementById("minutesInput");
var secondsInput = document.getElementById("secondsInput");

var startBtn = document.getElementById("setTimer");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");

let timer;
let totalTime;

startBtn.addEventListener("click", function() {
    if ((parseInt(hoursInput.value) || 0) + (parseInt(minutesInput.value) || 0) + (parseInt(secondsInput.value) || 0) === 0) {
        window.alert("Please enter a valid time");
    } else {

        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
    
        totalTime = hours * 3600 + minutes * 60 + seconds;
    
        // Start the timer
        clearInterval(timer)
        startTimer();
    }
});

// Start the timer
function startTimer() {
    timer = setInterval(function() {

        
        totalTime--;
        updateDisplay(); // Update the display every second
        if (totalTime <= 0) {
            var ring = document.getElementById("ringtone");
            clearInterval(timer);
            if (ring) {
                ring.play().catch(error => {
                    console.error("Error playing audio:", error);
                });
            } else {
                console.error("Audio element not found.");
            }
            
            alert("Time's up!");
            return;
        }
    }, 1000);
}
// Function to update the display
function updateDisplay() {
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60;
    
    // Format the time display
    document.getElementById("timerDisplay").innerHTML = 
        String(hours).padStart(2, '0') + ":" + 
        String(minutes).padStart(2, '0') + ":" + 
        String(seconds).padStart(2, '0');
}

// Stop the timer
stopBtn.addEventListener("click", function() {
    clearInterval(timer);
});

// Reset the timer
resetBtn.addEventListener("click", function() {
    clearInterval(timer);
    totalTime = 0; 
    updateDisplay();
});
