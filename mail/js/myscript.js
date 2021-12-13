const emailList = []; // Lista email presenti nel sistema

emailList.push("erre3@gmail.com");
emailList.push("esse8@gmail.com");
emailList.push("emme2@gmail.com");
emailList.push("enne0@gmail.com");
emailList.push("effe1@gmail.com");
emailList.push("acca6@gmail.com");
emailList.push("elle54@gmail.com");
emailList.push("zeta433@gmail.com");
emailList.push("team45@gmail.com");
emailList.push("test349@gmail.com"); // email inserite nella lista tramite push

const email = prompt("Scrivi il tuo indirizzo email"); // Richiesta inserimento email
let emailCheck = false;

for (let i = 0; i < emailList.length; i++) {
    if(email == emailList[i]) {
        emailCheck = true;
    }
}

if(emailCheck){
    console.log("email presente nella lista. Puoi accedere!");
}else{
    console.log("email non presente nella lista. Accesso negato!");
}