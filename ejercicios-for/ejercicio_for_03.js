let numero = [];
let cantidad = 0;
let suma = 0;
let mayor = null;
let menor = null;
let contadorPares = 0;
let contadorImpares = 0;

for (let i = 0; i<20; i++){
    let numeroAleatorio = Math.floor(Math.random()*100)+1;
    numero.push(numeroAleatorio);


    if (mayor === null || numero[i] >mayor) {
        mayor = numero[i];
    }
    if (menor == null||numero[i]<menor) {
        menor=numero[i];
    }

    if(numero[i]%2==0){
        contadorPares++
    } else {
        contadorImpares++
    }

    suma+=numero[i];
    cantidad++;



}
let promedio = suma/cantidad;
console.log("Promedio: " + promedio.toFixed(2) + "\nNumero Mayor " + mayor +"\nNumero menor: "+ menor + "\nCantidad de numeros pares: " + contadorPares+ "\nCantidad de numeros impares: " + contadorImpares);

        
    

