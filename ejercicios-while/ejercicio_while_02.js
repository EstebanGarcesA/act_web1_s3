

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