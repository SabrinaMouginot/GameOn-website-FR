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
var btnClose = document.querySelectorAll(".close"); //premier élément de classe "close"
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
  let hasError = false;
  // Définition et récupération de tous les élements dans des variables 
  const firstName = document.getElementById('first');
  const lastName = document.getElementById('last');
  const mail = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const quantity = document.getElementById('quantity'); 


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
    hasError = true;
  } else if (firstNameValue.length < 2) {
    hasError = true;
    setError(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  } else {
    removeError(firstName);
    hasError = false;
  }

  if (lastNameValue == "") {
    setError(lastName, 'Le nom est requis');
  } else if (lastNameValue.length < 2) {
    setError(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  } else {
    removeError(lastName);
    hasError = false;
    // console.log(lastName);
  }

  if (mailValue == "") {
    setError(mail, 'L\'adresse email est requise');
  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(mailValue))) {
    //si non conforme j'affiche ce message
    setError(mail, 'Votre adresse mail n\'a pas le bon format.');
  } else {
    // si conforme et que le champ n'est pas vide alors j'affiche le succès 
    removeError(mail);
    hasError = false;
    // console.log(mail);
  }

  //axe d'amélioration
  if (birthdateValue == "") {
    setError(birthdate, "Vous devez entrer votre date de naissance.");
    // console.log("Vous devez entrer votre date de naissance.");
  } else {
    removeError(birthdate);
    hasError = false;
    // console.log(birthdate);
  }

  if (quantityValue == "" || quantityValue < 0) { //si la valeur est négative ou absente, alors on a le msg d'erreur.
    setError(quantity, "Veuillez saisir un chiffre");
    // console.log('Veuillez saisir un chiffre');
  } else {
    removeError(quantity);
    hasError = false;
    // console.log(quantity);
  }

  

    // Validation pour les checkboxes "location"
    const locationCheckboxes = document.querySelectorAll('input[name="location"]');
    const isLocationChecked = Array.from(locationCheckboxes).some(checkbox => checkbox.checked);
  
    if (!isLocationChecked) {
      // Aucune checkbox n'est cochée, afficher le message d'erreur
      const locationErrorMessage = document.querySelector('.location-error');
      locationErrorMessage.style.display = 'block';
      hasError = true;
    } else {
      // Au moins une checkbox est cochée, cacher le message d'erreur
      const locationErrorMessage = document.querySelector('.location-error');
      locationErrorMessage.style.display = 'none';
    }


  //    // Validation pour les checkboxes "location"
  // const locationCheckboxes = document.querySelectorAll('input[name="location"]');
  // const isLocationChecked = Array.from(locationCheckboxes).some(checkbox => checkbox.checked);

  // const locationErrorMessage = document.querySelector('.location-error');

  // if (!isLocationChecked) {
  //   // Aucune checkbox n'est cochée, afficher le message d'erreur
  //   locationErrorMessage.setAttribute("data-error", "Entrez un choix svp");
  //   locationErrorMessage.style.display = 'block';
  //   hasError = true;
  // } else {
  //   // Au moins une checkbox est cochée, cacher le message d'erreur
  //   locationErrorMessage.style.display = 'none';
  // }



  if (hasError == false) {
    //enlever la modale de formulaire 
    //afficher la modale de validation
  }

}
