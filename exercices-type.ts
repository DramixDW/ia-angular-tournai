/*
 - Variable name qui n'accepte qu'un string
 une variable speed qui n'accepte qu'un number et est initialisé à 25
 - une variable isLoading qui n'accepte qu'un boolean
 - une variable age qui peut être un number ou un string
 -un tableau de couleurs et faire un push de la valeur "red"
 - une variable Chat qui est un object avec les propriétés: 
 espèce qui ne peut être qu'un string, une  propriété age
 qui accepte number ou string et finalement, une propriété name
 qui est optionnelle et n'accepte qu'un string

*/

let names: string;
let speed: number = 25;
let isLoading: boolean;
let age: number | string;
let colors: string[] = [];
colors.push("red");
let chat : {
    espèce: string,
    age: string | number,
    name?: string,
    vaccin: boolean,
    isInked: boolean,
}


/*
    - Function qui reçoit un nombre indéfini de nombre, les additionner et renvoyer les résultat
    - Function buildName qui a 2 argument, un prénom et un nom et ça renvoie 
    un string avec les deux remis ensemble
*/

function Addition(...nb : number[]): number {
    let resultat : number = 0;

    for (const n of nb) {
            resultat += n;
    }
    return resultat;
}

Addition(1,2,3,4,5);

function buildName(firstname: string, lastname: string): string {
    return firstname +  ' ' + lastname;
}
























