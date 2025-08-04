let nombres = ["David", "Esteban", "Jimena", "Mariana", "Angello"];
let nombre = "Esteba"
let i = 0;
encontrado = false;
while (i <= nombres.length) {
    if (nombre==nombres[i]) {
        console.log(`${nombre} se encuentra en la posicion ${i+1}`);
        encontrado =true;
        break;
    } else {
        
    }

    i++
    
}

if (!encontrado) {
    console.log(`El nombre ${nombre} no existe`);
}
        