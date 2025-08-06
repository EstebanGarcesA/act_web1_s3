let base = 4;
let exponente = 6;
let resultado =1;

console.log(`Calculando: ${base} ^ ${exponente}`);

for (i=1;i<exponente;i++){
    resultado *=base
    console.log(`Paso ${i}: ${resultado} * ${base} = ${resultado*base} `);
}

console.log(`resultado final: ${resultado*base}`);

