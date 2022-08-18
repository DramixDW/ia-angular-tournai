"use strict";
const bonjour = "2";
const number = 2;
const answer = true;
let bonjour2 = "bonjour2";
// tableau
const tabeleau = [];
const tabelair = [];
tabeleau.push("banane");
//tuple
const tulipe = ["2", 2, true, 2];
// tableau à plusieurs types
const fourreTout = [true, true, "orange", 23, 24, true];
// object 
let pomme;
pomme = {
    weigth: 25,
    color: 'red',
};
let nimporte;
let inconnu;
inconnu = "banana";
const add = (nbr1, nbr2) => {
    return nbr1 + nbr2;
};
//renvoie une erreur parce que ça n'a rien à voir D:
// const rienAvoir: boolean = add(2, 4);
const toutAvoir = add(4, 5);
function tooManyArgs(...args) {
    return args;
}
function optionalParam(arg1, arg2) {
    return arg1 + arg2;
}
// pas d'erreur, arg2 est optionel
optionalParam('hello');
function unknownArg(arg) {
    return arg;
}
// Atention, le résultat ne serait pas celui escompté ici ! 
const nbrMagique = unknownArg("2");
function returnNothing() {
}
returnNothing();
function callMyCallback(callback) {
    return callback(2);
}
callMyCallback((nbr) => {
    return nbr;
});
const chapeauPointu = 2;
const redLightColor = 'vert';
