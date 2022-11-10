let matrix = [];
let filas = document.querySelector("tbody").children
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}

async function inicialitzaJoc(){
    let matrix = [];
    let filas = document.querySelector("tbody").children
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children)
    }
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

//aÑadir input para el numero de mina con el id MinesIntroduides
function inicialitzaMines(MinesIntroduides, i1, i2) {
    let matriu = [];
    let minas = MinesIntroduides;
    for (let i = 0; i < i2; i++) {
        let filas = [];
        for (let j = 0; j < i1; j++) {
            filas.push(0)
        }
        matriu.push(filas);
    }

    while (minas > 0) {
        let aleatorio1 = Math.trunc(Math.random() * (i1));
        let aleatorio2 = Math.trunc(Math.random() * (i2));
        if (matriu[aleatorio1][aleatorio2] != 1) {
            matriu[aleatorio1][aleatorio2] = 1;
            minas--;
        }
    }
    return matriu;
}

let minas;
function rellenar(minas) {
    let tablamatriu = document.getElementsByTagName("tbody")[0];
    for (let i = 0; a < mines.length; i++) {
        for (let j = 0; j < mines[0].length; j++) {
            if (mines[i][j] == 1) {
                tablamatriu.children[i].children[j].style.backgroundColor = "red";

            }
        }
    }
}

function comienzaJoc() {
    inicialitzaJoc();
    let MinesIntroduides = document.getElementById("MinesIntroduides").valueAsNumber;
    let i1 = document.getElementById("i1").valueAsNumber;
    let i2 = document.getElementById("i2").valueAsNumber;

    minas = inicialitzaMines(MinesIntroduides, i1, i2);
    rellenar(minas);
}





