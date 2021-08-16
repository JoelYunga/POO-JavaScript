class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(this.nombre, this.edad);
    }
}

const p1 = new Persona('Joel', 22);
const p2 = new Persona('Kevin', 25);

console.log(p1);
p1.imprimir();
console.log(p2);
p2.imprimir();