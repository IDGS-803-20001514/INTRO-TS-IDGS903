interface Alumnos {
    matricula1: number;
    nombre: string;
    edad: number;
    correo: string;
    grupo: Grupo;
}

interface Grupo {
    grupo: string;
    year: number;
}

const alumno2: Alumnos = {
    matricula1: 12345,
    nombre: "Mario",
    edad: 23,
    correo: "mario@gmail.com",
    grupo: {
        grupo: "idgs",
        year: 2023,
    },
}

console.log(`La matricula es: ${alumno2.matricula1}`);

console.log(`El nombre es: ${alumno2.nombre}`);

console.log(`El año del grupo es: ${alumno2.grupo.year}`);

console.log('-------------------')

const {matricula1, nombre:nom, grupo:xx} = alumno2;

const {grupo, year:anie} = xx;

console.log(`La matricula es: ${matricula1}`);

console.log(`El nombre es: ${nom}`);

console.log(`El Grupo es: ${grupo}`);

console.log(`El año del grupo es: ${anie}`);

console.log('-------------------');

const gps:string[] = ['IDGS', 'IEVN', 'REDES'];

console.log(`Grupo 1: ${gps[0]}`);

console.log(`Grupo 2: ${gps[1]}`);

console.log(`Grupo 3: ${gps[2]}`);

console.log('-------------------');

const[a,,b] = gps;

console.log(`Grupo 1: ${a}`);

// console.log(`Grupo 2: ${v}`);

console.log(`Grupo 3: ${b}`);

