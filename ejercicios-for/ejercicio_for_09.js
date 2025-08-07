
let suma = 2;
let sumaTotal= 0;

for(let i=0;i<10;i++){
console.log(suma);
suma += suma
sumaTotal +=suma
}

console.log(`La suma total de la secuencia es: ${sumaTotal-suma} `);