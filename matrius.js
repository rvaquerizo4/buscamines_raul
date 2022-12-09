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

localStorage.setItem("minas", JSON.stringify(minas));
minas = JSON.parse(localStorage.getItem("minas"));
function iniJoc() {
    inicialitzaJoc();
    let MinesIntroduides = document.getElementById("MinesIntroduides").valueAsNumber;
    let i1 = document.getElementById("i1").valueAsNumber;
    let i2 = document.getElementById("i2").valueAsNumber;

    let minas = inicialitzaMines(MinesIntroduides, i1, i2);
    rellenar(minas);
    premCelda();
        //Contador
        window.onload = function(){
        pantalla1 = document.getElementById("crono");
        // validación de carga inicial aquí, para evitar algún error de valor null, indefinido
        if(localStorage.getItem("minas")) {
            logInicial = new Date(); //Inicializo a new Date
            logInicial.setTime(JSON.parse(localStorage.getItem("minas"))); //Asigno el setTime de inicio
        }

        if(localStorage.getItem("minas")){
            minas = JSON.parse(localStorage.getItem("minas"));
        }

        if(localStorage.getItem("acumularlog")){
            acumularlog = JSON.parse(localStorage.getItem("acumularlog"));
        }
        
        if ((minas == null)||(minas === "Log Out")) {
            acumularlog2 = new Date();
            acumularlog2.setTime(acumularlog); 
            cc1 = Math.round(acumularlog2.getMilliseconds()/10);
            ss1 = acumularlog2.getSeconds();
            mm1 = acumularlog2.getMinutes();
            hh1 = acumularlog2.getHours()-18;
            if (cc1 < 10) {cc1 = "0"+cc1;}
            if (ss1 < 10) {ss1 = "0"+ss1;}
            if (mm1 < 10) {mm1 = "0"+mm1;}
            if (hh1 < 10) {hh1 = "0"+hh1;}
            console.log(pantalla1.innerHTML = hh1+" : "+mm1+" : "+ss1);
        }
        else {
            minas = "Reanudar"; //una bandera nueva, para indicar que se reanude.
            start1 ()
        }
        }

        function start1 () {
        pantalla1 = document.getElementById("crono");
        if (minas == null) {  //Si es para inicio
            logInicial = new Date();
            localStorage.setItem("minas", JSON.stringify(logInicial.getTime()));
            control1 = setInterval(cronometro1,10);
            minas = "Inciado"; 
            localStorage.setItem("minas", JSON.stringify(minas));
            document.getElementById("button1").value = "Log Out";
        }
        else if (minas === "Reanudar"){

            control1 = setInterval(cronometro1,10);
            minas = "Inciado";
            localStorage.setItem("minas", JSON.stringify(minas));
            document.getElementById("button1").value = "Log Out";
        }
        else if (minas == "Log Out"){
        //Si esta pausado, reanudar
            logActual2 = new Date() ;
            logActual2 = logActual2.getTime(); 
            localStorage.setItem("logActual2", logActual2);
            acumullogResume = logActual2 - JSON.parse(localStorage.getItem("acumularlog"));
            logResume = acumullogResume;
            logInicial = new Date();
            logInicial.setTime(logResume);
            control1 = setInterval(cronometro1,10);
            minas = true;
            localStorage.setItem("minas", JSON.stringify(minas));
            document.getElementById("button1").value = "Log Out";
        }
        else if (islog = "Inciado") { 
            //Si esta inciado Pausa
            clearInterval(control1);
            minas = "Log Out";
            localStorage.setItem("minas", JSON.stringify(minas));
            document.getElementById("button1").value = "Log In";
        }
        }

        function cronometro1 () {
        //Unicamente meti las los JSON.stringify
        logActual = new Date();
        acumularlog = logActual - logInicial;
        localStorage.setItem("acumularlog", JSON.stringify(acumularlog));
        acumularlog2 = new Date();
        acumularlog2.setTime(acumularlog);
        idx=idx + 1;
        cc1 = Math.round(acumularlog2.getMilliseconds()/10);
        ss1 = acumularlog2.getSeconds();
        mm1 = acumularlog2.getMinutes();
        hh1 = acumularlog2.getHours()-18;
        if (cc1 < 10) {cc1 = "0"+cc1;}
        if (ss1 < 10) {ss1 = "0"+ss1;} 
        if (mm1 < 10) {mm1 = "0"+mm1;}
        if (hh1 < 10) {hh1 = "0"+hh1;}
        pantalla1.innerHTML = hh1+" : "+mm1+" : "+ss1;
        }
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










