let promedio;
let primerNota;
let segundaNota;
let tercerNota;
let sumaNotas;

let alumno = prompt("Ingresar nombre del alumno");

while (alumno !="esc") {
        primerNota = parseInt(prompt("Ingrese primer nota del alumno"));
        segundaNota = parseInt(prompt("Ingrese segunda nota del alumno"));
        tercerNota = parseInt(prompt("Ingrese tercer nota del alumno"));
        sumaNotas = primerNota+segundaNota+tercerNota;
        promedio = (sumaNotas/3);
        promedio = promedio.toFixed(2);

            if (promedio>5) {
                alert ("El alumno " + alumno + " aprobo la materia, su promedio es " + promedio );
            }
            else {
                alert ("El alumno " + alumno + " repobro la materia, su promedio es " + promedio) ;
            } ;
           alert ("Si desea calcular otro promedio, ingrese el nombre de otro alumno, en caso contrario ingrese la palabra esc");    
    alumno = prompt ("Ingresar nombre del alumno");
}   