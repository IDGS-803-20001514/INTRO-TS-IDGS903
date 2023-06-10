class Persona2 {
    nombre: string = '2';
    edad: number = 2;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){

        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

console.log('-------------------');
console.log('-------------------');

console.error('Archivo de Clases');

console.log('-------------------');
console.log('-------------------');

let persona:Persona2;

persona = new Persona2('Juan', 23);

persona.imprimir();


class Dado {

    private valor:number = 0;

    public tirar(){
        this.generar();
    }

    private generar(){
        this.valor = Math.floor(Math.random() * 6) + 1;
    }

    public imprimir(){
        console.log(`Valor: ${this.valor}`);
    }
}

console.log('-------------------');

let dado1 = new Dado();

dado1.tirar();

dado1.imprimir();

console.log('-------------------');

class Perosna3{

    constructor(public nombre:string, public edad:number){}

    imprimir(){
    
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    
    }
}

let persona3:Perosna3;

persona3 = new Perosna3('Juan', 23);

persona3.imprimir();

console.log('-------------------');




