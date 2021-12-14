class Animal{
    constructor(nome){
        this._nome = nome;
    }

    emitirSom(){

    }
}

class Cachorro extends Animal{

    emitirSom(){
        console.log("au au");
    }
}

class Gato extends Animal{
    emitirSom(){
        console.log("miau");
    }
}