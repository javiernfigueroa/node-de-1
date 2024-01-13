const { registrarCita, leerCitas } = require('./operaciones');

const operacion = process.argv[2];

if (operacion === 'registrar') {
  const [, , , nombre, edad, animal, color, enfermedad] = process.argv;
  registrarCita(nombre, edad, animal, color, enfermedad);
  console.log('Cita registrada con éxito.');
} else if (operacion === 'leer') {
  const citasRegistradas = leerCitas();
  console.log('\nCitas registradas:');
  console.log(JSON.stringify(citasRegistradas, null, 2));
} else {
  console.log('Operación no válida. Las opciones son "registrar" o "leer".');
}

