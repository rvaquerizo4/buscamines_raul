let matrix = [];
let filas = document.querySelector("tbody").children
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}
let minas;

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
    let m = MinesIntroduides;
    for (let i = 0; i < i2; i++) {
        let filas = [];
        for (let j = 0; j < i1; j++) {
            filas.push(0)
        }
        matriu.push(filas);
    }

    while (m > 0) {
        let aleatorio1 = Math.trunc(Math.random() * (i1));
        let aleatorio2 = Math.trunc(Math.random() * (i2));
        if (matriu[aleatorio1][aleatorio2] != 1) {
            matriu[aleatorio1][aleatorio2] = 1;
            m--;
        }
    }
    return matriu;
}


function rellenar(minas) {
    let tabla = document.getElementsByTagName("tbody")[0];
    for (let i = 0; i < minas.length; i++) {
        for (let j = 0; j < minas[0].length; j++) {
            if (minas[i][j] == 1) {
                
                tabla.children[i].children[j].style.backgroundColor = "red";

            }
        }
    }
}

function iniJoc() {
    inicialitzaJoc();
    let MinesIntroduides = document.getElementById("MinesIntroduides").valueAsNumber;
    let i1 = document.getElementById("i1").valueAsNumber;
    let i2 = document.getElementById("i2").valueAsNumber;

    let minas = inicialitzaMines(MinesIntroduides, i1, i2);
    rellenar(minas);
    premCelda();
}

function premCelda() {
    var aux = document.getElementById("tabla");
    var celdaClic = coord => {
        if (coord.target.style.backgroundColor == "red") {
            window.alert(`Has clicado en las coordenadas ${coord.target.id} lamentablemente es una mina`);
        }
        else {
            window.alert(`Has clicado en las coordenadas ${coord.target.id} i te has salvado, no es una mina`);
        }
    }
    aux.addEventListener("click", celdaClic);
}








