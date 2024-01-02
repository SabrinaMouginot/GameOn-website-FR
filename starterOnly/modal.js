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
const modalbgUn = document.querySelector(".un");
const modalValidation = document.querySelector(".bis");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermer la modal
var btnClose = document.querySelectorAll(".close-btn"); //premier élément de classe "close"
btnClose.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
}

form.addEventListener("submit", validate)

//je définis une fonction pour afficher les erreurs de saisies avec 2 paramètres 
// 1 - l'élément en question, 2 - le message associé
const setError = (element, message) => {
  //j'affecte ma variable comme étant le parent de l'element passé en parametre 
  const formData = element.parentElement;
  formData.setAttribute("data-error-visible", true);
  formData.setAttribute("data-error", message);
}

const removeError = (element) => {
  const formData = element.parentElement;
  formData.setAttribute("data-error-visible", false);
  formData.setAttribute("data-error", "");
}

function validate(event) {
  event.preventDefault()
  let hasError = {
    firstName: false,
    lastName: false,
    mail: false,
    birthdate: false,
    quantity: false,
    locationRadios: false,
    termsCheckbox: false
  };
  // Définition et récupération de tous les élements dans des variables 
  const firstName = document.getElementById('first');
  const lastName = document.getElementById('last');
  const mail = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const quantity = document.getElementById('quantity');
  const locationRadios = document.querySelectorAll('input[name="location"]');
  const termsCheckbox = document.getElementById('checkbox1');

  //je définis mes variables pour récupérer les valeurs saisies 
  //et j'utilise la fonction trim pour retirer les espaces en début et fin de saisie 
  const firstNameValue = firstName.value.trim(); // trim supprime les espaces aux 2 extrémités de la chaîne et renvoie une nouvelle chaîne, sans modifier la chaîne d'origine.
  const lastNameValue = lastName.value.trim();
  const mailValue = mail.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();

  //Je définis les conditions d'erreur et affiche le ou les messages associé
  if (firstNameValue == "") {
    setError(firstName, 'Le prénom est requis');
    hasError.firstName = true;
  } else if (firstNameValue.length < 2) {
    hasError.firstName = true;
    setError(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  } else {
    removeError(firstName);
    hasError.firstName = false;
  }

  if (lastNameValue == "") {
    setError(lastName, 'Le nom est requis');
    hasError.lastName = true;
  } else if (lastNameValue.length < 2) {
    setError(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    hasError.lastName = true;
  } else {
    removeError(lastName);
    hasError.lastName = false;
  }

  if (mailValue == "") {
    setError(mail, 'L\'adresse email est requise');
    hasError.mail = true;
  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(mailValue))) {
    //Regex pour vérifier le format du mail
    //si non conforme j'affiche ce message
    setError(mail, 'Votre adresse mail n\'a pas le bon format.');
    hasError.mail = true;
  } else {
    // si conforme et que le champ n'est pas vide alors j'affiche le succès 
    removeError(mail);
    hasError.mail = false;
  }

  //axe d'amélioration
  if (birthdateValue == "") {
    setError(birthdate, "Vous devez entrer votre date de naissance.");
    hasError.birthdate = true;
  } else {
    removeError(birthdate);
    hasError.birthdate = false;
  }

  if (quantityValue == "" || quantityValue < 0) { //si la valeur est négative ou absente, alors on a le msg d'erreur.
    setError(quantity, "Veuillez saisir un chiffre");
    hasError.quantity = true;
  } else {
    removeError(quantity);
    hasError.quantity = false;
  }

  // Vérification pour les boutons radio
  let locationSelected = false;

  locationRadios.forEach((radio) => {
    if (radio.checked) {
      locationSelected = true;
    }
  });

  if (!locationSelected) {
    setError(locationRadios[0], 'Vous devez choisir une option.');
    hasError.locationRadios = true;
  } else {
    removeError(locationRadios[0]);
    hasError.locationRadios = false;
  }

  // Vérification pour la checkbox des termes et conditions
  if (!termsCheckbox.checked) {
    setError(termsCheckbox, 'Vous devez vérifier que vous acceptez les termes et conditions.');
    hasError.termsCheckbox = true;
  } else {
    removeError(termsCheckbox);
    hasError.termsCheckbox = false;
  }

  if (!hasError.firstName && !hasError.lastName && !hasError.mail && !hasError.birthdate && !hasError.locationRadios && !hasError.quantity && !hasError.termsCheckbox) {
    //enlever la modale de formulaire 
    //afficher la modale de validation
    // Cacher la modale de formulaire
    modalbgUn.style.display = "none";
    // Afficher la modale de validation
    modalValidation.style.display = "block";
    //pour réinitialiser le formulaire, je crois qu'il faut un morceau de code comme suit:
    // form.reset();
    //Mais je en peux pas tester tant que l'écran reste grisée après la fermeture du message validation
  }
}

