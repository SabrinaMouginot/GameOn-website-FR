function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// const form = document.querySelector("#form");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

form.addEventListener("submit", validate)

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
   //je définis mes variables pour récupérer les valeurs saisies 
  //et j'utilise la fonction trim pour retirer les espaces en début et fin de saisie 
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const mailValue = mail.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();
  
  //Je définis les conditions d'erreur et affiche le ou les messages associé
  if(firstNameValue == "") {
    console.log('Le prénom est requis');
  } else if (firstNameValue.length < 2) {
    console.log("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  } else {
    console.log(firstName);
  }
 
  if(lastNameValue == "") {
    console.log('Le nom est requis');
  } else if (lastNameValue.length < 2) {
    console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  } else {
    console.log(lastName);
  }
  
  if(mailValue == "") {
    console.log('L\'adresse email est requise');
    //ici je teste si les valeurs saisies sont conformes à ma REGEX défini plus haut
  } else if (mailValid.test(mailValue) == false) {
    //si non conforme j'affiche ce message
    console.log("Votre adresse mail n\'a pas le bon format.")
  } else {
    // si conforme et que le champ n'est pas vide alors j'affiche le succès 
    console.log(mail);
  }
  
  //axe d'amélioration
  if(birthdateValue == "") {
    console.log("Vous devez entrer votre date de naissance.");
  } else {
    console.log(birthdate);
  }
  
  if(quantityValue == "" || quantityValue < 0) {
    console.log('Veuillez saisir un chiffre');
  } else {
    console.log(quantity);
  }


  }

