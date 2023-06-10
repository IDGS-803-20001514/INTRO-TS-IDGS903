class PilaEnteros{

    private vec:number[] = [];

    insertar(x:number){
        this.vec.push(x);
    }

    extraer(){

        return (this.vec.length > 0) ? this.vec.pop() : null;
    }
}

class PilaString{

    private vec:string[] = [];

    insertar(x:string){
        this.vec.push(x);
    }

    extraer(){
    
        return (this.vec.length > 0) ? this.vec.pop() : null;

    }
}

let pila1 = new PilaEnteros();

pila1.insertar(23);

pila1.insertar(28);

pila1.insertar(2);

console.error('Archivo de Genericos');

console.log(pila1.extraer());

console.log('-------------------');

let pila2 = new PilaString();

pila2.insertar('23');

pila2.insertar('28');

pila2.insertar('2');

console.log(pila2.extraer());

console.log('-------------------');

class PilaGenerica<T>{

    private vec:T[] = [];

    insertar(x:T){
    
        this.vec.push(x);
    }

    extraer(){
    
        return (this.vec.length > 0) ? this.vec.pop() : null;
    }
}

let pila3 = new PilaGenerica<number>();

pila3.insertar(23);

pila3.insertar(28);

pila3.insertar(2);

console.log(pila3.extraer());

console.log('-------------------');

let pila4 = new PilaGenerica<string>();

pila4.insertar('23');

pila4.insertar('28');

pila4.insertar('2');

console.log(pila4.extraer());

console.log('-------------------');







