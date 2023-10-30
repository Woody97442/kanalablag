// Variables
let btnGetTemp = document.querySelector("body"); // Sélectionne le body pour déclencher l'action
let messageBlagCat = document.querySelector(".categorie"); // Sélectionne la div pour afficher la Categorie
let messageTextHead = document.querySelector(".text_head");
let messageText = document.querySelector(".text"); 
let messageHidden = document.querySelector(".text_hidden"); 


// Événement
btnGetTemp.addEventListener(
  "click",
  getBlag
); // Ajoute un écouteur pour le clic sur le body

// Fonction pour obtenir la température
function getBlag() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      let blague = data.data;

      messageBlagCat.textContent = "Categorie : " + blague.categorie;

      messageTextHead.textContent = "Blague : " + blague.content.text_head;

      messageText.textContent = blague.content.text;

      if (blague.content.text_hidden) {
        messageHidden.textContent = "Réponse : " + blague.content.text_hidden;
      }


    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la récupération des utilisateurs : ",
        error
      );
    });
}

