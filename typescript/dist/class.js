"use strict";
class Human {
    // écrire ça ou rien écrire, c'est le même
    constructor() {
        // public par défaut
        this.heigth = 179;
        this.nickname = "Dramix";
    }
    get Nickname() {
        return this.nickname + " c'est mon surnom";
    }
}
class Student extends Human {
    // On peut le redéfinir
    constructor() {
        super();
        this.favoriteFramework = "Angular";
        this.doCode = function () {
            console.log('je code, promis jurè, je mens pas');
        };
        console.log(this.heigth, this.Nickname);
    }
    get Nickname() {
        return 'banana';
    }
}
class SuperHero {
    usePower() {
        console.log("j'utilise mon pouvoir");
    }
}
class Batman extends SuperHero {
    constructor() {
        super();
        super.usePower();
        this.usePower();
    }
    usePower() {
        console.log("i'm batman");
    }
}
const dramix = new Human();
const batman = new Batman();
