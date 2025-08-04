let a = 0;
let b = 1;
let contador = 0;

while (contador < 15) {
    console.log(a);
    
    let suma = a+b;
    a=b;
    b=suma
    contador++
}