let matrix = [];
let filas = document.querySelector("tbody").children
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}

async function inicialitzaJoc(){
    let filas = document.getElementById("i1").valueAsNumber;
    let columnas = document.getElementById("i1").valueAsNumber;
    let contenido = "&nbsp;";
    for (let i = 0; i < filas; i++){
        let filaActual = document.getElementById('tblDatos').insertRow(i);

        for (let j = 0; j < columnas; j++){
            let celda = filaActual.insertCell(j);

            celda.innerHTML = contenido;
        }
    }
        filas = document.querySelector("tbody").children
        for (var i = 0; i < filas.length; i++) {
            matrix.push(filas[i].children);
        }
}

function matriuBinaria(matrix) {
    var matrix2 =[];
    for (var i = 0; i < matrix.length; i++) {
        let filas=[];
        for (var j = 0; j < matrix[0].length; j++) {
           if (matrix[i][j].style.backgroundColor == "red")
            filas.push(1);
           else
            filas.push(0);
        }
        matrix2.push(filas);
    }
    return matrix2;
}

function paintCheckerboard() {
    let filas = document.querySelector("tbody").children
    let matrix = []
    for (var i = 0; i < filas.length; i++) {
        matrix.push(filas[i].children)
    }
    for (let i=0; i < matrix.length; i++) {
        for (let j=0; j < matrix[0].length; j++) {
            if((j%2) == 0 && (i%2) == 0)
            matrix[i][j].style.backgroundColor = "red";
            else if((j%2) != 0 && (i%2) != 0)
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}