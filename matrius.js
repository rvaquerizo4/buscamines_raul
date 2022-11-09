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

let minas2;
function Imines(minas2) {
    let taula = document.getElementsByTagName("tbody")[0];
    for (let i = 0; i < minas2.length; i++) {
        for (let j = 0; j < minas2[0].length; j++) {
            if (minas2[i][j] == 1) {
                taula.children[i].children[j].style.backgroundColor = "red";
            }
        }
    }
}


function iniJoc() {
    inicialitzaJoc();
    let MinesIntroduides = document.getElementById("MinesIntroduides").valueAsNumber;
    let i1 = document.getElementById("i1").valueAsNumber;
    let i2 = document.getElementById("i2").valueAsNumber;

    minas2 = inicialitzaMines(MinesIntroduides, i1, i2);
    Imines(minas2);

}
