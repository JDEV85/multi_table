function display(){



    var b = 0
    var a = 0
    var r = 0

    const tabla = document.getElementById("tabla");

    const nlist = document.querySelectorAll("tr");

    var n = nlist.length


    while(n > 1){

    tabla.deleteRow(1);

    n--;

    }

    a = document.getElementById("mult").value;
    b =  document.getElementById("rang").value;

    for(let i = 1; i <= b; i++){

    r = a * i;

    const row = document.createElement("tr");
    const cellOp = document.createElement("td")
    const cellR = document.createElement("td")
    const nodeOp = document.createTextNode(a + " x " + i + " = ");
    const nodeR = document.createTextNode(r);

    tabla.appendChild(row)
    row.appendChild(cellOp);
    row.appendChild(cellR);
    cellOp.appendChild(nodeOp);
    cellR.appendChild(nodeR);

    }
    }

    function updateLab(){

    lbm = document.getElementById("mult").value;
    lbr =  document.getElementById("rang").value;

    const lbrang = document.getElementById("lbrang");
    const lbmult = document.getElementById("lbmult");

    lbmult.innerHTML = lbm;
    lbrang.innerHTML = lbr;


}