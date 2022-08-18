const bonjour: string = "2";
const number: number = 2;
const answer: boolean = true;

let bonjour2 = "bonjour2";

// tableau
const tabeleau:  string[] = [];
const tabelair :  Array<string> = [];

tabeleau.push("banane");


//tuple
const tulipe: [string, number, boolean, number] = ["2", 2,  true, 2];
// tableau à plusieurs types
const fourreTout : Array<string | number | boolean> = [true, true, "orange", 23, 24, true];
// object 
let pomme : {
    color: string,
    weigth: number,
    wasted?: boolean,
};

pomme = {
    weigth: 25,
    color: 'red',
}

let nimporte: any;
let inconnu: unknown;

inconnu = "banana";

const add = (nbr1: number, nbr2: number): number => {
 return nbr1 + nbr2;
}
//renvoie une erreur parce que ça n'a rien à voir D:
// const rienAvoir: boolean = add(2, 4);

const toutAvoir = add(4, 5);

function tooManyArgs(...args: string[]) {
    return args;
}

function optionalParam(arg1: string, arg2?: string ) {
    return arg1 + arg2;
}

// pas d'erreur, arg2 est optionel
optionalParam('hello');

function unknownArg(arg: unknown) {
    return arg as number;
}

// Atention, le résultat ne serait pas celui escompté ici ! 
const nbrMagique: number = unknownArg("2");

function returnNothing(): void {
    
}

returnNothing();

function callMyCallback(callback: (nbr: number) => number) {
    return callback(2);
}

callMyCallback((nbr: number) => {
    return nbr;
})

type stringNbr = string | number; 


type RedLightColor = 'rouge' | 'orange' | 'vert' | null
const chapeauPointu: stringNbr = 2;
const redLightColor: RedLightColor | undefined = 'vert';




















































































