
function suma():void{
    console.log(2+2);
}

function suma2(a:number, b:number):number{
    return a+b;
}

console.log(suma2(4,6));

const suma3 = (a:number, b:number):string => {

    return `${a+b}`
}

console.log("Suma 3: " + suma3(4,6));

function multiplcacion(a:number, b:number, c = 3):number{

    let temp = a*b;

    return temp*c;
}

console.log(multiplcacion(2,3));

interface Mascota {
    nombre: string;
    edad: number;
    mostrarEdad: () => void
}

function calcular(mascotas:Mascota, x:number):void{

    mascotas.edad += x

    console.log(mascotas);
}

const nuevaMascota:Mascota = {
    nombre: "Carlos",
    edad: 3,
    mostrarEdad(){
    
        console.log("La edad es: ", this.edad);
    }
}

calcular(nuevaMascota, 5);

const fuctSumar = function (valor1:number, valor2:number):number {

    return valor1 + valor2;
}

console.log(fuctSumar(4,5));

function calcular1 (n1:number, n2:number, n3?:number):number{

    return (n3) ? n1+n2+n3 : n1+n2;
}

function calcular2(...valores:number[]){

    let suma = 0;

    for(let x = 0; x < valores.length; x++){
        suma += valores[x];

        return "Suma: " + suma;
    }
}

console.log(calcular2(10, 2, 3, 4));
console.log(calcular2(1, 2));

