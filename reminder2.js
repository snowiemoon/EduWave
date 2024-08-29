//Ask user to allow notification access
if ("Notification" in window){
    Notification.requestPermission().then(function (permission) {
        if(Notification.permission !== "granted"){
            alert("Allow notification access?");
        }
    });
}

var timeoutIds = [];

function scheduleReminder(){
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    var dateTimeString = date + " " + time;
    var scheduledTime = new Date(dateTimeString);
    var currentTime = new Date();
    var timeDifference = scheduledTime - currentTime;

    if(timeDifference > 0) {
        addReminder(title, description, dateTimeString);

        var timeoutId = setTimeout(function () {
           document.getElementById("notificationSound").play();

           var notification = new Notification(title, {
            body: description,
            requireInteraction: true,
           });
        }, timeDifference);

        timeoutIds.push(timeoutId);
    } else {
        alert("The scheduled time is in the past!");
    }
   }

   function addReminder(title, description, dateTimeString){
    var tableBody = document.getElementById("reminderTableBody");
  
    var row = tableBody.insertRow();
  
    var titleCell = row.insertCell(0);
    var descriptionCell = row.insertCell(1);
    var dateTimeCell = row.insertCell(2);
    var actionCell = row.insertCell(3);
  
    titleCell.innerHTML = title;
    descriptionCell.innerHTML = description;
    dateTimeCell.innerHTML = dateTimeString;
    actionCell.innerHTML = 
     '<button onclick="deleteReminder(this);">Delete</button>';
  }
  
  function deleteReminder(button){
      var row = button.closest("tr"); // Corrected the typo here
      var index = row.rowIndex;
      
      clearTimeout(timeoutIds[index - 1]); // Assuming timeoutIds are being used to track reminder timeouts
      timeoutIds.splice(index - 1, 1);
  
      row.remove();
  }