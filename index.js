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





let edad;
let acumuladoEdad = 0;
let nombre;
let promedio = 0;
let cantidadIngresado = 0;
let mayorEdad = 0;
let menorEdad = 999;
let nombreMayor;
let nombreMenor; 
 
    function datosGenerales () {
            alert (" La suma total de la edad es: " + acumuladoEdad +"\n El promedio de edad es de : " + promedio + "\n La persona de mayor edad es: " + nombreMayor + " con " + mayorEdad + " años " + "\n La persona de menor edad es: " + nombreMenor + " con " + edad + " años ");
           }

 alert ("Para no ingresar más personas, ingrese esc");
    nombre = prompt("Ingresar nombre de la persona");

