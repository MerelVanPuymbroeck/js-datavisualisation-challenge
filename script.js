for ( i=1; i<table1.rows.length; i++ ) // i++ =+1 erbij, table lenght = ?, i=1 = waar het start. 
    {
    var currentRow = table1.rows[i]; // specifiek waar het start/begint
    var data = [];
    var country = currentRow.cells[1].innerHTML;
   
    for ( var y=2; y<currentRow.cells.length; y++ ) {
        var numbers = currentRow.cells[y].innerHTML;
        console.log(numbers);
    }
}