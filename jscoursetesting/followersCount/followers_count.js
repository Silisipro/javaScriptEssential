let count = 0; // Initialiser le compteur à 0

// Affiche le compteur dans l'élément HTML
function displayCount() {
  document.getElementById('countDisplay').innerHTML = count;
}

// Vérifie la valeur du compteur et affiche des alertes spécifiques
function checkCountValue() {
  if (count === 10) {
    alert("Votre publication Instagram a gagné 10 abonnés ! Félicitations !");
  } else if (count === 20) {
    alert("Votre publication Instagram a gagné 20 abonnés ! Continuez comme ça !");
  }
}

// Incrémente le compteur de 1
function increaseCount() {
  count++;
  displayCount();
  checkCountValue();
}

// Réinitialise le compteur à 0 et affiche un message d'alerte
function resetCount() {
  count = 0;
  displayCount();
  alert("Le compteur de followers a été réinitialisé à 0 !");
}
