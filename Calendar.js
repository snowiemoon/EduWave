// Assign Variables
const calendar = document.getElementById("calendarContent");
const selectedDate = document.getElementById("selectedDate");
const display = document.getElementById("display");

const prev = document.getElementById("btnPrev");
const next = document.getElementById("btnNext");
const add = document.getElementById("addEvent");

const eventInput = document.getElementById("event");
const eventList = document.getElementById("eventList");

let currentDate = new Date();
let currentClickedDiv = null;
let events = {}; // Object to store events by date

function renderCalendar() {
    // Clear previous content when switched months
    calendar.querySelector('.days').innerHTML = '';
    
    // Update the display with current month and year
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    display.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
    
    // Getting the first day of the month and number of days in the month
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();
    
    // Adding empty divs for days of the week before the start of the month
    for (let i = 0; i < firstDay; i++) {
        const div = document.createElement('div');
        calendar.querySelector('.days').appendChild(div);
    }
    
    // Adding divs for each day of the month
    for (let day = 1; day <= lastDay; day++) {
        const div = document.createElement('div');
        div.textContent = day;
        div.classList.add('day');

        div.addEventListener('click', function() {
            // Updating Clicked date
            if (currentClickedDiv) {
                currentClickedDiv.classList.remove('clicked');
            }
            div.classList.add('clicked');
            currentClickedDiv = div;

            // Set and display selected date
            const selectedDateStr = `${year}-${month + 1}-${day}`;
            selectedDate.querySelector('.selected').textContent = `Selected Date: ${selectedDateStr}`;
            
            // Display events for the selected date
            displayEvents(selectedDateStr);

        });

        calendar.querySelector('.days').appendChild(div);
    }
}


//Functioning Buttons

prev.addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

next.addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});


//Functioning Event List

function displayEvents(date) {
    eventList.innerHTML = ''; 
    const dateEvents = events[date] || [];
    dateEvents.forEach(event => {
        const li = document.createElement('li');
        li.textContent = event;
        eventList.appendChild(li);
    });
}
add.addEventListener('click', function() {
    if (!currentClickedDiv) return; // No date selected

    const eventValue = eventInput.value.trim();
    if (eventValue === '') return; // Empty input

    const selectedDateStr = selectedDate.querySelector('.selected').textContent.replace('Selected Date: ', '');

    if (!events[selectedDateStr]) {
        events[selectedDateStr] = [];
    }

    events[selectedDateStr].push(eventValue);
    displayEvents(selectedDateStr);
    
    // Clear the input field
    eventInput.value = '';
});

// Start Calendar
renderCalendar();
