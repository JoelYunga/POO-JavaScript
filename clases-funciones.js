function Persona (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function (){
        console.log(`${this.nombre} ${this.edad}`);
    }
}


const p1 = new Persona('Alex',26);
const p2 = new Persona('Joel',22);

console.log(p1.nombre);
console.log(p2.nombre);

p1.imprimir();
p2.imprimir();
