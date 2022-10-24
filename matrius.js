let inputValue = document.getElementById("i1").value;
let inputValue2 = document.getElementById("i2").value;

async function inicialitzaJoc(){
    //eraser();
    let filas = parseInt(inputValue);
    let columnas = parseInt(inputValue2);
    let contenido = "&nbsp;";
    for (let i = 0; i < filas; i++){
        let filaActual = document.getElementById('tblDatos').insertRow(i);

        for (let j = 0; j < columnas; j++){
            let celda = filaActual.insertCell(j);

            matrix = celda.innerHTML = contenido;
        }
    }
    return matrix;
}


function matriuBinaria(matrix) {
    var matrix2 =[];
    var a = [];
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            a.push(5);
        }
    }
    return matrix2;
}

/* async function eraser(){
    let filas = parseInt(inputValue);
    let columnas = parseInt(inputValue2);
    for (let i = 0; i < filas; i++){
        let filaActual = document.getElementById('tblDatos').deleteRow(i)

        for (let j = 0; j < columnas; j++){
            let celda = filaActual.deleteCell(j);

            celda.innerHTML = contenido;
        }
    }
} */