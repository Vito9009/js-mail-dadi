// numeri random per il lancio dei dadi

const humanNumber = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
const computerNumber = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);

// console.log per mostrare i numeri solo in console

console.log(humanNumber);
console.log(computerNumber);

// messaggi da mostrare in caso di vittoria / sconfitta o pareggio

if(humanNumber > computerNumber){
    container.innerHTML = '<div class="box superman">' + "Questo match è stato vinto da superman. Hey computer, hai perso!" + '</div>';
}else if(humanNumber < computerNumber){
    container.innerHTML = '<div class="box computer">' + "Il computer ha vinto! Hey superman, vuoi arrenderti?" + '</div>';
}else {
    container.innerHTML = '<div class="box draw">Questa partita termina con un pareggio. Volete sapere chi vincerà? Continuate a giocare!</div>';
}