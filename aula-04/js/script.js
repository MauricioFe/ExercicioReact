class Animal {
    constructor(name) {
        this.name = name;
    }
    speak(){
        console.log(`${this.name}`);
    }
}

class Dog extends Animal{
    constructor(name, type){
        super(name);
        this.type = type;
    }

    speak(){
        console.log(`${this.name} (${this.type}) latindo`);
    }
}

class Cat extends Animal{
    constructor(name, type){
        super(name);
        this.type =type;
    }

    speak(){
        console.log(`${this.name} (${this.type}) miando`);
    }
}

const animal = new Animal('toto');
const dog = new Dog('bacon', 'vira-lata');
const cat = new Cat('ted', 'vira-lata');
animal.speak();
dog.speak();
cat.speak();