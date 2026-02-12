let nivel = 1;
let respuestaCorrecta = 0;

function generarPregunta() {
  let a, b, pregunta, correcta;
  let tipo;

  if (nivel <= 5) tipo = "suma";
  else if (nivel <= 10) tipo = "resta";
  else if (nivel <= 15) tipo = "multi";
  else tipo = "division";

  if (tipo === "suma") {
    a = random(1, 10 + nivel);
    b = random(1, 10 + nivel);
    correcta = a + b;
    pregunta = `${a} + ${b}`;
  }

  if (tipo === "resta") {
    a = random(5, 20 + nivel);
    b = random(1, a);
    correcta = a - b;
    pregunta = `${a} - ${b}`;
  }

  if (tipo === "multi") {
    a = random(2, 5 + nivel);
    b = random(2, 5);
    correcta = a * b;
    pregunta = `${a} × ${b}`;
  }

  if (tipo === "division") {
    b = random(2, 10);
    correcta = random(2, 10);
    a = b * correcta;
    pregunta = `${a} ÷ ${b}`;
  }

  respuestaCorrecta = correcta;

  let opciones = generarOpciones(correcta);
  document.getElementById("pregunta").innerText = pregunta;

  opciones.forEach((op, i) => {
    document.getElementById(`op${i}`).innerText = op;
  });
}

function generarOpciones(correcta) {
  let opciones = [correcta];
  while (opciones.length < 3) {
    let falsa = correcta + random(-10, 10);
    if (!opciones.includes(falsa)) opciones.push(falsa);
  }
  return opciones.sort(() => Math.random() - 0.5);
}

function responder(index) {
  let elegida = document.getElementById(`op${index}`).innerText;

  if (parseInt(elegida) === respuestaCorrecta) {
    document.getElementById("mensaje").innerText = "✔ Correcto";
    nivel++;
    if (nivel > 25) {
      document.getElementById("pregunta").innerText = "🎉 Juego completado";
      return;
    }
    document.getElementById("nivel").innerText = nivel;
    setTimeout(generarPregunta, 500);
  } else {
    document.getElementById("mensaje").innerText = "✖ Incorrecto";
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

generarPregunta();
