
//Hide The DIV'S
function form_hide() {
  var x = document.getElementById("details_div");
  var y = document.getElementById("form_div");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
  
}

//Delete Rows
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}
//Add Table
function newTable() {
  //Row Count
  var oRows = document.getElementById('myTable').getElementsByTagName('tr');
        var iRowCount = oRows.length;
        var m=iRowCount;
    //document.getElementById("line").innerHTML = iRowCount;      
        
  var vname = document.getElementById("name").value;
        var vphone = document.getElementById("phone").value;
  
  var table = document.getElementById("myTable");
  var row = table.insertRow(m);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = vname;
  cell2.innerHTML = vphone;
  cell3.innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)">';
  form_hide();
}
