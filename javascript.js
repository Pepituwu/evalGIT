let nom = prompt("Comment vous appelez vous?");
alert("Bonjour " + nom);
document.write("<h2>Bonjour " + nom + "</h2>");

let jeux = "";
while (jeux !== "OUI" && jeux !== "NON") {
  jeux = prompt("Vous voulez jouer à un jeu ? Merci de répondre par OUI ou NON");

    if (jeux === "OUI") {
        let choix = parseInt(prompt("Choisis un nombre entre 1, 2, 3, 4, 5, 6, 7, 8, 9")); //travail avec des nombres entier pour éviter les entourloupes
        let aleatoire = Math.floor(Math.random() * 9) + 1; //Création fonction ranodm pour choix du programme
    
    if (choix == aleatoire) {
          alert("Bravo ! Le programme avait aussi choisi " + aleatoire +". 😁");
          document.write("<h4>Winner 😁")
    } else {
          alert("Perdu ! Le programme avait choisi " + aleatoire +". 😭");
          document.write("<h4>Perdant 😭</h4>")
        }
     break;
  } else if (jeux !== "OUI" && jeux !== "NON") {
    alert("Merci de choisir une réponse entre OUI et NON");
  }
  
  if (jeux == "NON"){
    alert("Pas de soucis bg");
    document.write("<h5>Mauvais joueur 🤓</h5>");
    break;
}
}

