// Ejercicio While 2: Suma de Números Pares
// Implementa un ciclo while que sume todos los números pares entre 1 y 50. 
// Muestra el resultado final y cuántos números se sumaron.

let suma = 0;
let numero = 1;
let cantidadDePares = 0;
while (numero <=50) {
    if (numero % 2 == 0){

        suma +=numero;
        cantidadDePares++;
    } 
     numero++;
    
}
console.log(`El resultado es ${suma}`);
console.log(`Se sumaron: ${cantidadDePares} numeros`);