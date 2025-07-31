// Ejercicio While 3: Validador de Contraseña
// Desarrolla un programa que use while para solicitar una contraseña hasta que cumpla con los criterios: 
// admin123

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