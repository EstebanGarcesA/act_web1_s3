let counter = 0;
let number = 0;

while (number < 95) {
    number = Math.floor(Math.random()*100);
    console.log(`El numero generado es ${number}`);
    counter++;
    
}

console.log(`El numero de veces para que me generara un numero mayor a 95 fue ${counter} `);
