function fnGetPage() {
    document.getElementById('page').style.display = "block";


}

function fnClose() {
    document.getElementById('page').style.display = "none";
}

function fnGetData() {
    var n = document.getElementById("cname").value;
    var t = document.getElementById("ctype").value;
    var e = document.getElementById("edit").value;
    var table = document.getElementById("table1");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cb = document.createElement('input');
    cb.setAttribute("type", "checkbox");
    cell1.appendChild(cb);

    cell2.innerHTML = n;

    cell3.innerHTML = t;
    cell4.innerHTML = e;

    var data = document.getElementById("myRow");
    var c2 = data.insertCell(-1);
    c2.innerHTML = n;
}

function fnDeleteData() {

    var table = document.getElementById("table1");
    var rowCount = table.rows.length;
    for (var i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if (null != chkbox && true == chkbox.checked) {
            if (rowCount <= 1) {
                alert("Cannot delete all the rows.");
                break;
            }
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
}
var a = 1000,
    c = 1;

function fnGetrow() {

    var table = document.getElementById("table2");
    var row = table.insertRow(-1);
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    var col3 = row.insertCell(2);
    var col4 = row.insertCell(3);
    var col5 = row.insertCell(4);
    var cb = document.createElement('input');
    cb.setAttribute("type", "checkbox");
    col1.appendChild(cb);
    col2.innerHTML = a;
    col3.innerHTML = "String" + c;
    var d = new Date("July 21, 1983 01:15:00");
    var n = d.getDate()
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);
    col4.innerHTML = today;
    var select = document.createElement("select");
    var option1 = document.createElement("option");
    option1.value = "yes";
    option1.selected = "yes";
    var option2 = document.createElement("option");
    option2.value = "No";
    select.appendChild(option1);
    select.appendChild(option2);
    col5.innerHTML = select;
    a++;
    c++;
}

function fnDeleterow() {
    var table = document.getElementById("table2");
    var rowCount = table.rows.length;
    for (var i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if (null != chkbox && true == chkbox.checked) {
            if (rowCount <= 1) {
                alert("Cannot delete all the rows.");
                break;
            }
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
}
