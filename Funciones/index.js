let instrumento;
let precioParcial = 0;
let envio = 0 ;
let precioFinal = 0;
let ubicacion;
let nombre;

function precioTotal () {
    precioFinal = precioParcial + envio;

    alert (nombre + " El precio total es de: " + precioFinal + " pesos");
}

nombre = prompt ("Ingrese su nombre");

instrumento = prompt ("¿Que instrumento desea comprar?\n Guitarra \n Bajo \n Bateria");

while (instrumento != "esc") {
    switch (instrumento) {
        case "Guitarra" :
            precioParcial = precioParcial + 15000;
            break;

        case "Bajo" :
            precioParcial = precioParcial + 17000;
            break;
            
        case "Bateria" :
            precioParcial = precioParcial + 20000;
            break;    
    }

    instrumento = prompt ("Si desea seguir comprando, ingrese el instrumento que desea, en caso contrario ingrese esc ");
}

ubicacion = prompt ("Ingrese su región para calcular el costo de envío \n\n NOA (Catamarca, Jujuy, Tucumán, Salta y Santiago del Estero) \n\n NEA (Chaco, Corrientes, Formosa y Misiones) \n CUYO (La Rioja, Mendoza , San Luis y San Juan) \n\n CENTRO (Buenos Aires, Córdoba, Entre Ríos y Santa Fe) \n\n PATAGONÍA ( Chubut, La Pampa, Neuquén, Río Negro, Santa Cruz y Tierra del Fuego)");

switch (ubicacion) {
    case "NOA" :
        envio = envio + 1000 ;
        break;
    
    case "NEA" :
        envio = envio + 900;
        break;
      
    case "CUYO" :
        envio = envio + 800;
        break;
        
    case "CENTRO" :
        envio = envio + 500;
        break;
        
    case "PATAGONIA" :
        envio = envio + 1000;
        break;
}

precioTotal();