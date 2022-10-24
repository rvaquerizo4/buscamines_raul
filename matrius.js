// async function crearBoton(){
//     let button = document.createElement('button'); 
//     button.type = 'button'; 
//     button.innerText = 'Crear tabla'; 
//     document.body.appendChild(button); 
// }
// async function crearInputs(){
//     let input = document.createElement("input");
//     input.type = "text";
//     input.className = "css-class-name";
//     container.appendChild(input);
//     //input 2
//     let input2 = document.createElement("input");
//     input2.type = "text";
//     input2.className = "css-class-name";
//     container.appendChild(input2); 
// }

let inputValue = document.getElementById("i1").value;
let inputValue2 = document.getElementById("i2").value;

let rows = document.querySelector("tbody").children
let matrix = []

async function crearTabla(){
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    for (var i = 0; i > rows.inputValue; i++) {
        matrix.push(rows[i].children)
        for (var j = 0; j > rows.inputValue1; i++) {
            matrix.push(rows[j].children)
        }
    }
    document.getElementsByTagName('body')[0].appendChild(table);
}