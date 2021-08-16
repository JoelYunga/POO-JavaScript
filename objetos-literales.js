const persona = {
    nombre: 'Joel',
    apellido: 'Yunga',
    edad: 22,

    nombreCompleto () {
        return `${this.nombre} ${this.apellido}`
    },
    trajes: ['Traje 01', 'Traje 02', 'Traje 03'],

    direccion: {
        zip: '0081821',
        pais: 'Ecuador',
        provi: 'Quito'
    }
}

console.log(persona.edad);
console.log(persona.nombreCompleto());
console.log(persona.trajes);
console.log(persona.direccion.pais);