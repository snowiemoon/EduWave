var rIndex,
table = document.getElementById("table");


//add row

function addHtmlTableRow(){

    //get the table by id
    //create a new row and cell
    //get values from input text
    //set the values into row cell's
    


    var newRow = table.insertRow(table.length),

        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5),
        cell7 = newRow.insertCell(6),
        cell8 = newRow.insertCell(7),

        time = document.getElementById("time").value,
        md = document.getElementById("md").value,
        td = document.getElementById("td").value,
        wd = document.getElementById("wd").value,
        thd = document.getElementById("thd").value,
        fd = document.getElementById("fd").value,
        std = document.getElementById("std").value,
        sd = document.getElementById("sd").value;


    cell1.innerHTML = time;
    cell2.innerHTML = md;
    cell3.innerHTML = td;
    cell4.innerHTML = wd;
    cell5.innerHTML = thd;
    cell6.innerHTML = fd;
    cell7.innerHTML = std;
    cell8.innerHTML = sd;

    //Adding borders
    newRow.classList.add('t-border');
    cell1.classList.add('t-border')
    cell2.classList.add('t-border')
    cell3.classList.add('t-border')
    cell4.classList.add('t-border')
    cell5.classList.add('t-border')
    cell6.classList.add('t-border')
    cell7.classList.add('t-border')
    cell8.classList.add('t-border')

    //call the function to set the event to the new row
    selectedRowToInput();
}


//display selected row data into input text
function selectedRowToInput(){

    
    for (var i = 1; i < table.rows.length; i++){

        table.rows[i].onclick = function(){
            
            //get the seected row index
            rIndex = this.rowIndex;
            document.getElementById("time").value = this.cells[0].innerHTML;
            document.getElementById("md").value = this.cells[1].innerHTML;
            document.getElementById("td").value = this.cells[2].innerHTML;
            document.getElementById("wd").value = this.cells[3].innerHTML;
            document.getElementById("thd").value = this.cells[4].innerHTML;
            document.getElementById("fd").value = this.cells[5].innerHTML;
            document.getElementById("std").value = this.cells[6].innerHTML;
            document.getElementById("sd").value = this.cells[7].innerHTML;

        };
    }
}

selectedRowToInput();

function editHtmlTableSelectedRow(){
    var time = document.getElementById("time").value,
    md = document.getElementById("md").value,
    td = document.getElementById("td").value,
    wd = document.getElementById("wd").value,
    thd = document.getElementById("thd").value,
    fd = document.getElementById("fd").value,
    std = document.getElementById("std").value,
    sd = document.getElementById("sd").value;


    table.rows[rIndex].cells[0].innerHTML = time;
    table.rows[rIndex].cells[1].innerHTML = md;
    table.rows[rIndex].cells[2].innerHTML = td;
    table.rows[rIndex].cells[3].innerHTML = wd;
    table.rows[rIndex].cells[4].innerHTML = thd;
    table.rows[rIndex].cells[5].innerHTML = fd;
    table.rows[rIndex].cells[6].innerHTML = std;
    table.rows[rIndex].cells[7].innerHTML = sd;
}


function removeSelectedRow(){
    table.deleteRow(rIndex);
    //clear input text
   document.getElementById("time").value = "";
   document.getElementById("md").value = "";
   document.getElementById("td").value = "";
   document.getElementById("wd").value = "";
   document.getElementById("thd").value = "";
   document.getElementById("fd").value = "";
   document.getElementById("std").value = "";
   document.getElementById("sd").value = "";

}
