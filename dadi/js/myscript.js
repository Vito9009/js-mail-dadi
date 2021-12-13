// numeri random per il lancio dei dadi

const humanNumber = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
const computerNumber = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);

// console.log per mostrare i numeri solo in console

console.log(humanNumber);
console.log(computerNumber);

// messaggi da mostrare in caso di vittoria / sconfitta o pareggio

if(humanNumber > computerNumber){
    container.innerHTML = '<div class="box superman">' + "Questo match è stato vinto da superman. Hey computer, hai perso!" + '<br/>' + "Numero superman:" + " " + humanNumber + '<br/>' + "Numero computer:" + " " + computerNumber + '</div>';
}else if(humanNumber < computerNumber){
    container.innerHTML = '<div class="box computer">' + "Il computer ha vinto! Hey superman, vuoi arrenderti?" + '<br/>' + "Numero superman:" + " " + humanNumber + '<br/>' + "Numero computer:" + " " + computerNumber + '</div>';
}else {
    container.innerHTML = '<div class="box draw">' + "Questa partita termina con un pareggio. Volete sapere chi vincerà? Continuate a giocare!" + '<br/>' + "Numero superman:" + " " + humanNumber + '<br/>' + "Numero computer:" + " " + computerNumber + '</div>';
}


/*
funzione per restituire un numero compreso tra min e max (inclusi)

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
 }

 https://www.w3schools.com/js/js_random.asp
*/