const humanPlayer = document.querySelector("persona");
const aIPlayer = document.querySelector("computer");

const humanNumber = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
const computerNumber = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);


if(humanNumber > computerNumber){
    console.log("Questo match è stato vinto dall'uomo.");
    console.log("Hey computer, hai perso!");
}else if(humanNumber < computerNumber){
    console.log("Il computer ha vinto!");
    console.log("Hey umano, ti sembra di essere in un film?");
}else {
    console.log("Questa partita termina con un pareggio. Volete sapere chi vincerà? Continuate a giocare!");
}