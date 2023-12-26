function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const form = document.querySelector("#form");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}





// Fermer la modal
const modalbgBis = document.querySelector(".bgroundBis");
var span0 = document.getElementsByClassName("close")[0]; //premier élément de classe "close"
var span1 = document.getElementsByClassName("close")[1]; //deuxième élément de classe "close"
const modalForm = document.getElementById("myForm");

span0.onclick = function () {
  modalbgBis.style.display = "none";
  modalbg.style.display = "none";
}
span1.onclick = function () {
  modalForm.reset(); //réinitialise tous les champs du formulaire à leurs valeurs par défaut.
  modalbgBis.style.display = "none";
  modalbg.style.display = "none";
}
// modalForm.addEventListener("submit", validate);





form.addEventListener("submit", validate)




//je définis une fonction pour afficher les erreurs de saisies avec 2 paramètres 
// 1 - l'élément en question, 2 - le message associé
const setError = (element, message) => {
  //j'affecte ma variable comme étant le parent de l'element passé en parametre 
  const formData = element.parentElement;
  //je defini l'emplacement d'affichage de mes messages d'erreur dans une variable
  const errorDisplay = formData.querySelector('.erreur');

  //le message s'affichera à l'emplacement défini avec un innerHTML grâce au second parametre de la fonction
  errorDisplay.innerHTML = message;
  // j'ajoute une classe à formData pour customiser l'apparence de l'erreur
  formData.classList.add('erreurMessage');
  // je supprime la classe de succès en cas d'erreur
  formData.classList.remove('success');
}


function validate(event) {
  event.preventDefault()
  console.log('C\'est la validation du formulaire')





  // Définition et récupération de tous les élements dans des variables 
  const form = document.getElementById('myForm');
  const firstName = document.getElementById('first');
  const lastName = document.getElementById('last');
  const mail = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const quantity = document.getElementById('quantity');
  const conditionG = document.getElementById('checkbox1');
  const checked = document.getElementById('Checked');

  //je définis mes variables pour récupérer les valeurs saisies 
  //et j'utilise la fonction trim pour retirer les espaces en début et fin de saisie 
  const firstNameValue = firstName.value.trim(); // trim supprime les espaces aux 2 extrémités de la chaîne et renvoie une nouvelle chaîne, sans modifier la chaîne d'origine.
  const lastNameValue = lastName.value.trim();
  const mailValue = mail.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();

  //Je définis les conditions d'erreur et affiche le ou les messages associé
  if (firstNameValue == "") {
    console.log('Le prénom est requis');
    setError(firstName, 'Le prénom est requis');
  } else if (firstNameValue.length < 2) {
    console.log("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    setError(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  } else {
    console.log(firstName);
  }

  if (lastNameValue == "") {
    console.log('Le nom est requis');
  } else if (lastNameValue.length < 2) {
    console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  } else {
    console.log(lastName);
  }

  if (mailValue == "") {
    console.log('L\'adresse email est requise');
  } else if (mailValue == false) {
    //si non conforme j'affiche ce message
    console.log("Votre adresse mail n\'a pas le bon format.")
  } else {
    // si conforme et que le champ n'est pas vide alors j'affiche le succès 
    console.log(mail);
  }

  //axe d'amélioration
  if (birthdateValue == "") {
    console.log("Vous devez entrer votre date de naissance.");
  } else {
    console.log(birthdate);
  }

  if (quantityValue == "" || quantityValue < 0) {
    console.log('Veuillez saisir un chiffre');
  } else {
    console.log(quantity);
  }


}

