let grocery1;
let grocery2;
let grocery3;


function groceryTracker() {
  grocery1 = parseFloat(document.getElementById('grocery1').value) || 0;
  grocery2 = parseFloat(document.getElementById('grocery2').value) || 0;
  grocery3 = parseFloat(document.getElementById('grocery3').value) || 0;


  let total = grocery1 + grocery2 + grocery3;


  const resultElement = document.getElementById('result');
  resultElement.innerText = `Le montant total des achats d'épicerie est : ${total.toFixed(2)} €`;
}
