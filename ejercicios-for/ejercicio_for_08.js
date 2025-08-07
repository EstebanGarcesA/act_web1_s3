let frase = "Esta es una frase";

frase=frase.toLowerCase();

let conteoA=0;
let conteoE=0;
let conteoI=0;
let conteoO=0;
let conteoU=0;

for(let i = 0; i < frase.length; i++){
let letra = frase[i];
if (letra==="a") {
    conteoA++
} else if (letra==="e") {
    conteoE++
}else if (letra==="i") {
    conteoI++
}else if (letra==="o") {
    conteoO++
} else if(letra==="u"){
    conteoU++
}
    
}

console.log("Cantidad de vocales en la frase: " + frase + "\nCantidad de A: " + conteoA + "\nCantidad de E: " + conteoE + "\nCantidad de I: " + conteoI + "\nCantidad de O: " + conteoO + "\nCantidad de U: " + conteoU);
