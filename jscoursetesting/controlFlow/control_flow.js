let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

function canAccessServiceDietary(role) {
  console.log("Vérification du rôle : ", role);

  switch (role.toLowerCase()) {
    case 'employé':
      console.log("Rôle détecté : Employé");
      console.log("En tant qu'employé, vous avez accès aux 'Services diététiques'.");
      break;

    case 'membre inscrit':
      console.log("Rôle détecté : Membre inscrit");
      console.log("En tant que membre inscrit, vous avez accès aux 'Services diététiques' et à une interaction individuelle avec un diététicien.");
      break;

    case 'abonné':
      console.log("Rôle détecté : Abonné");
      console.log("En tant qu'abonné, vous avez un accès partiel aux 'Services diététiques'.");
      break;

    case 'non-abonné':
      console.log("Rôle détecté : Non-abonné");
      console.log("Vous devez d'abord vous inscrire ou vous abonner pour accéder aux 'Services diététiques'.");
      break;

    default:
      console.log("Rôle détecté : Non reconnu");
      console.log("Rôle non reconnu. Veuillez entrer un rôle valide.");
  }

  console.log("Fin de la vérification pour le rôle :", role);
}

console.log("Début de la vérification des rôles");
canAccessServiceDietary("Employé");
canAccessServiceDietary("Membre inscrit");
canAccessServiceDietary("Abonné");
canAccessServiceDietary("Non-abonné");
canAccessServiceDietary("Administrateur");
console.log("Fin de la vérification des rôles");

