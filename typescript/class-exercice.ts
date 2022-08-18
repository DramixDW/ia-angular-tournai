/*
    Vous avez des animaux aquatiques et terrestres 
    Tous les animaux ont un nom et respirent
    Les animaux terrestres crient
    Les animaux aquatiques nagent
   Créer 2 animaux aquatiques
   Créer 3 animaux teresstres
   
   3 fonction,
   Une qui accepte tous les animauc et les fait respirer
   Une qui accepte tous les terrestres et les fait crier
   Une qui accepte tous les aquatiques et les fait nager
*/

interface IAnimaux {
    nom: string;
    respire: () => void; 
}

abstract class Animal implements IAnimaux {
    declare nom: string;
    constructor(name: string) {
        this.nom = name;
    }    
    respire() {
        console.log(`Je suis un ${this.nom} et je respire`);
    }
}

class AquaticAnimal extends Animal {
    respire() {
        super.respire();
        console.log(`dans l'eau`);
    }
    nage() {
        console.log(`Je suis un ${this.nom} et je nage`);
    }
}

class EarthlyAnimal extends Animal {
    crie() {
        console.log(`Je suis un ${this.nom} et je crie`);
    }
}


function animalBreath(animals: IAnimaux[]) {
    for (const animal of animals) {
        animal.respire();
    }
}

function animalSwim(animals: AquaticAnimal[]) {
    for (const animal of animals) {
        animal.nage();
    }
}

function animalShout(animals: EarthlyAnimal[]) {
    for (const animal of animals) {
        animal.crie();
    }
}

const nemo = new AquaticAnimal('Namo');
const maurice = new AquaticAnimal('Maurice');
const jeanGeGe = new EarthlyAnimal('Jean-Gerard');

animalBreath([nemo, maurice, jeanGeGe]);
animalSwim([nemo, maurice]);
animalShout([jeanGeGe]);
