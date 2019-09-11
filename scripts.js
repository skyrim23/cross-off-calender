let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
var boxes = [];
var date;
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    date = 1;

    //this is from tic tac toe 
    var board = document.createElement('table');
    board.setAttribute('border', 1);
    board.setAttribute('cellspacing', 0);


    var identifier = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");
        board.appendChild(row);
        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {

                //this is from tic tac toe
                var cell = document.createElement('td');
                cell.setAttribute('height', 120);
                cell.setAttribute('width', 120);
                cell.setAttribute('align', 'center');
                cell.setAttribute('valign', 'center');
                cell.classList.add('col' + j, 'row' + i);


                //let cell = document.createElement("button");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);

                //tic tac toe
                cell.identifier = identifier;
                cell.addEventListener('click', set);
                row.appendChild(cell);
                boxes.push(cell);
                identifier += identifier;
            }
            else if (date > daysInMonth) {
                break;
            }

            else {

                //this is from tic tac toe
                var cell = document.createElement('td');
                cell.setAttribute('height', 120);
                cell.setAttribute('width', 120);
                cell.setAttribute('align', 'center');
                cell.setAttribute('valign', 'center');
                cell.classList.add('col' + j, 'row' + i);

                //let cell = document.createElement("button");
                let cellText = document.createTextNode(date);
                // color today's date
                cell.appendChild(cellText);


                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                }

                
                    if (year < today.getFullYear() || month <= today.getMonth()) {
                        cell.addEventListener('click', set);
                    }
                

                cell.identifier = identifier;

                row.appendChild(cell);
                boxes.push(cell);
                identifier += identifier;
                date++;
            }


        }

        tbl.appendChild(board); // appending each row into calendar body.
    }

}


function set() {
    
    if (this.innerHTML !== 'X' && this.innerHTML !== '') {
        this.innerHTML = 'X';
    }

    else {
        if (this.innerHTML == 'X') {

            this.innerHTML = this.date;
        }

    }


}
//==============================================
//************** Tic tak toe js ****************
//==============================================
//%%%%%%%%%%%%%%%%%%  js  %%%%%%%%%%%%%%%%%%%%%%
