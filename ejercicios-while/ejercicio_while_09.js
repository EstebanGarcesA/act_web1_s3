let numeroSecreto = Math.floor(Math.random() * 50) + 1; // Número entre 1 y 50
let intentos = 0;
let adivinado = false;

while (intentos < 7 && !adivinado) {
  let intento = parseInt(prompt("Adivina el número (entre 1 y 50):"));
  intentos++;

  if (isNaN(intento) || intento < 1 || intento > 50) {
    alert("Por favor, ingresa un número válido entre 1 y 50.");
    continue; // No cuenta como intento válido
  }

  if (intento === numeroSecreto) {
    alert("¡Correcto! Adivinaste el número en " + intentos + " intentos.");
    adivinado = true;
  } else {
    let diferencia = Math.abs(intento - numeroSecreto);

    if (diferencia <= 3) {
      alert("¡Cerca! Pero no es el número.");
    } else if (intento < numeroSecreto) {
      alert("Muy bajo.");
    } else {
      alert("Muy alto.");
    }
  }
}

if (!adivinado) {
  alert("Lo siento, se acabaron los intentos. El número era " + numeroSecreto);
}
