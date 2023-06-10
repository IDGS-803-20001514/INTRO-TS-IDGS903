
interface Alumno {
    nombre: string;
    matricula: number;
    email: string;
}

// Definicion de un Objeto
const alumno:Alumno = {
    nombre: "Cristian Ulises",
    matricula: 20001514,
    email: 'cris@gmail.com.mx'
}

//Definicion de un arreglo
let mascotas = ['perro', 'gato', 'pez', 'conejo', 'tortuga']
mascotas[1] = 'gatito'

//Agregar un elemento al final del arreglo
mascotas.push('hamster')

//Te muestra el arreglo en forma de tabla
console.table(mascotas);

//Se declara un arreglo con dos tipos de datos
let tem:(number|string)[] = []

tem.push("Nombre")

tem.push(123)

console.log(tem);

console.log(mascotas);

console.log(alumno);

