class Mate{
    static #pi = 3.141592

    static get PI(){
        return this.#pi;
    }

    static suma(a, b){
        return a + b;
    }
}

console.log(Mate.PI);
console.log(Mate.suma(40,50));

