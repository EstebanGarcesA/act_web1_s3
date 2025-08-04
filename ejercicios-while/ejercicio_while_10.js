let suma = 0;
let cantidad = 0;
let calificacion;
let mayor = null;
let menor = null;

while (true) {
    calificacion = parseFloat(prompt("Ingrese una calificacion (0 -1 para terminar):"));
    if (calificacion === -1) {
        break;
    }

    if (isNaN(calificacion) || calificacion< 0 || calificacion > 5) {
        alert("Por favor, ingresa una calificacion valida entre 0 y 5.")
        continue;
    }
    suma+=calificacion;
    cantidad++;

    if (mayor === null || calificacion >mayor) {
        mayor = calificacion;
    }
    if (menor == null||calificacion<menor) {
        menor=calificacion;
    }
    if (cantidad > 0) {
        let promedio = suma/cantidad;
        alert(
            "Promedio: " + promedio.toFixed(2) +
            "\nCalificación más alta: " + mayor +
            "\nCalificación más baja: "+ menor
        );
    }else{
        alert("No se ingresarion calificaciones");
    }
}

