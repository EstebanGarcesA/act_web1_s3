

let password = "";
let intentos = 0;
let maxIntentos = 3;

while (password !== "admin123") {

    password = prompt("Ingresa la contraseña:");
    intentos++;

    if (password !== "admin123") {
        console.log(`Contraseña incorrecta. Llevas ${intentos} Intentos`);
    }
}

if (password === "admin123") {
    console.log("¡Acceso concedido!");
    console.log(`Intentos totales ${intentos}`);
}