let matriz = [];

for(let fila = 0; fila < 5; fila++){
    let filaActual = [];
    for(let columna = 0; columna <5; columna++){
        filaActual.push(fila+columna);
    }
    matriz.push(filaActual);
}

console.log(`Matriz 5x5`);
for(let i = 0;i<matriz.length;i++){
    console.log(matriz[i].join("\t"));
}
