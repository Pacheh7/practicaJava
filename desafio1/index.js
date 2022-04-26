let edad;
let acumuladoEdad = 0;
let nombre;
let promedio = 0;
let cantidadIngresado = 0;
let mayorEdad = 0;
let menorEdad = 999;
let nombreMayor;
let nombreMenor; 
 

    alert ("Para no ingresar más personas, ingrese esc");

    nombre = prompt("Ingresar nombre de la persona");

    function datosGenerales () {
    
        while (nombre != "esc") {
    
            cantidadIngresado = cantidadIngresado + 1;
    
            edad = parseInt(prompt("Ingrese edad de " + nombre));
           
            acumuladoEdad = parseInt(acumuladoEdad + edad);
    
            promedio = parseInt((acumuladoEdad/cantidadIngresado));
    
            promedio = promedio.toFixed(2);
    
                if (edad > mayorEdad) {
                        mayorEdad = edad;
                        nombreMayor = nombre;
                     }
                if (edad < menorEdad) {
                        menorEdad = edad;
                        nombreMenor = nombre;     
                    }
       
                 nombre = prompt("Ingresar nombre de la persona");
                }
            
    }

 datosGenerales();

 alert (" La suma total de la edad es: " + acumuladoEdad +"\n El promedio de edad es de : " + promedio + "\n La persona de mayor edad es: " + nombreMayor + " con " + mayorEdad + " años " + "\n La persona de menor edad es: " + nombreMenor + " con " + menorEdad + " años ");