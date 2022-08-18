interface Developper {
    favoriteFramework: string;
    doCode: () => void;
}

interface Banana {
    banana: string;
}

class Human {
  // public par défaut
  heigth: number = 179;
  private nickname: string = "Dramix";

  protected get Nickname() {
    return this.nickname + " c'est mon surnom";
  }

  // écrire ça ou rien écrire, c'est le même
  constructor() {}
}

class Student extends Human  implements Developper {
    favoriteFramework: string = "Angular";
    // On peut le redéfinir
    constructor() {
        super();
        console.log(this.heigth, this.Nickname)
    }
    public get Nickname() {
        return 'banana'
    }

    doCode = function () {
        console.log('je code, promis jurè, je mens pas');
    }
}

abstract class SuperHero {
    declare name: string;

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

    usePower(): void {
        console.log("i'm batman");
    }
}

const dramix = new Human();
const batman = new Batman();








