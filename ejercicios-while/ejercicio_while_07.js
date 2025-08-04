let numero = 12345;
let contador = 0;

while (numero > 0) {
    numero = Math.floor(numero / 10);
    contador++;
}

console.log(`El número tiene ${contador} dígitos.`);
