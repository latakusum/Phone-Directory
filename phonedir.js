
function form_hide() {
  var x = document.getElementById("form_div");
  var y = document.getElementById("details_div");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
   	y.style.display = "block";
  }
  
}
    function add_name() {
    	form_hide();
    	var vname = document.getElementById("name").value;
        var vphone = document.getElementById("phone").value;
        //Build an array containing Customer records.
        var customers = new Array();
        customers.push([ vname, vphone]);
 
        //Create a HTML Table element.
        var table = document.getElementById('Details_table');
        table.border = "1";
 
        //Get the count of columns.
        var columnCount =3;// customers[0].length;
 
       for (var i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = customers[i][j];
            }
        }
 
        var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
        
    }