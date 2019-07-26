var dataset = [];
for ( i=2; i<table1.rows.length; i++ ) // i++ =+1 erbij, table lenght = ?, i=1 = waar het start. 
    {
    var currentRow = table1.rows[i]; // specifiek waar het start/begint
    var data = [];
    var country = currentRow.cells[1].innerHTML; // in welke row we starten
    var json = {
        label: country,
        data: data ,
        // backgroundColor: ,
        // borderColor: ,
    }
   
    for ( var y=2; y<currentRow.cells.length; y++ ) {
        var numbers =parseInt(currentRow.cells[y].innerHTML) ;
        data.push(numbers); // alle nummers van heel de tabel verkrijgen en niet enkel één jaar of 1 cel
    }
    console.log(data);
    dataset.push(json);
}; 

var years = [];
for ( i=2; i<table1.rows[1].cells.length; i++ ) {
years.push(table1.rows[1].cells[i].innerHTML);
} // om de jaren te verkrijgen 

console.log(years);

var canvas1 = document.createElement("canvas");
canvas1.id = "canvas1";
table1.parentNode.insertBefore(canvas1, table1);
var ctx = document.getElementById('canvas1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: dataset,
    },
    options: {}
    }
); // de data in canvas verkrijgen


//table 2
var dataset = [];
for ( i=1; i<table2.rows.length; i++ ) // i++ =+1 erbij, table lenght = voor de volledige table, i=1 = waar het start. 
    {
    var currentRow = table2.rows[i]; // specifiek waar het start/begint
    var data = [];
    var country = currentRow.cells[1].innerHTML; // in welke row we starten
    var json = {
        label: country,
        data: data ,
        // backgroundColor: ,
        // borderColor: ,
    }
   
    for ( var y=1; y<currentRow.cells.length; y++ ) {
        var numbers =parseInt(currentRow.cells[y].innerHTML) ;
        data.push(numbers); // alle nummers van heel de tabel verkrijgen en niet enkel één jaar of 1 cel
    }
    console.log(data);
    dataset.push(json);
}; 

var years = [];
for ( i=0; i<table2.rows[0].cells.length; i++ ) {
years.push(table2.rows[0].cells[i].innerHTML);
} // om de jaren te verkrijgen en deze starten nu bij 0, want er zijn ma 2 lijnen 

console.log(years);

var canvas2 = document.createElement("canvas");
canvas2.id = "canvas";
table2.parentNode.insertBefore(canvas2, table2);
var ctx = document.getElementById('canvas').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: dataset,
    },
    options: {}
    }
); // de data in canvas verkrijgen, nieuwe canvas verkrijgen zodat deze apart wordt gezet van de 1ste tabel