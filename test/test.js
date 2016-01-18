function fnGetPage() {
    document.getElementById('page').style.display = "block";
}

function fnClose() {
    document.getElementById('page').style.display = "none";
}

function fnGetData() {
    var n, e, t, table, row, col1, col2, col3, col4, cb;
    n = document.getElementById("cname").value;
    t = document.getElementById("ctype").value;
    e = document.getElementById("edit").value;
    table = document.getElementById("table1");
    row = table.insertRow(-1);
    col1 = row.insertCell(0);
    col2 = row.insertCell(1);
    col3 = row.insertCell(2);
    col4 = row.insertCell(3);
    cb = document.createElement('input');
    cb.setAttribute("type", "checkbox");
    col1.appendChild(cb);
    col2.innerHTML = n;
    col3.innerHTML = t;
    col4.innerHTML = e;
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
    var table, row, col1, col2, col3, col4, col5, cb, d, n, today, dd, mm, yyyy;
    table = document.getElementById("table2");
    row = table.insertRow(-1);
    col1 = row.insertCell(0);
    col2 = row.insertCell(1);
    col3 = row.insertCell(2);
    col4 = row.insertCell(3);
    col5 = row.insertCell(4);
    cb = document.createElement('input');
    cb.setAttribute("type", "checkbox");
    col1.appendChild(cb);
    col2.innerHTML = a;
    col3.innerHTML = "String" + c;
    d = new Date("July 21, 1983 01:15:00");
    n = d.getDate()
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth() + 1;
    yyyy = today.getFullYear();
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
