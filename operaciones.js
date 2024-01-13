const fs = require('fs');

const citasPath = 'citas.json';

function registrarCita(nombre, edad, animal, color, enfermedad) {
  const citas = leerCitas();
  const nuevaCita = { nombre, edad, animal, color, enfermedad };
  citas.push(nuevaCita);
  guardarCitas(citas);
}

function leerCitas() {
  try {
    const citasData = fs.readFileSync(citasPath);
    return JSON.parse(citasData);
  } catch (error) {
    return [];
  }
}

function guardarCitas(citas) {
  fs.writeFileSync(citasPath, JSON.stringify(citas, null, 2));
}

module.exports = { registrarCita, leerCitas };
