
let texto = "taco cat";
let textoInvertida = "";
let textoLimpio ="";

for(let i=0;i<texto.length;i++){
    let caracter = texto[i];
    if(caracter !== " "){
        textoLimpio += caracter.toLowerCase();
    }
}

let textoLimpioInvertido = "";

for (let i = textoLimpio.length - 1; i >= 0; i--) {
    textoLimpioInvertido += textoLimpio[i];
}


if (textoLimpio === textoLimpioInvertido) {
    console.log(`El texto ${texto} es un palindromo`);
} else {
    console.log(`El texto ${texto} no es un palindromo`);
}

