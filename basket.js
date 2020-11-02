/* déclaration des variables utiles au script */
var localItems = JSON.parse(localStorage.getItem('items'));
var sectionBasket = document.getElementById('product-basket');
var monTableau = [];
var totalAmount = 0;

/* construction du tableau de produits commandés en fonction du localStorage */
if (localStorage.length === 0) {
    var emptyBasket = document.createElement('p');
    emptyBasket.innerHTML = 'votre panier est vide';
    sectionBasket.appendChild(emptyBasket);
} else {
    for ( i = 0 ; i <= localItems.length - 1 ; i++ ) {
        var quantityArray = parseInt(localItems[i].quantité);
        var priceArray =  parseInt(localItems[i].prix.replace(' €', ''));
        var priceProduct = quantityArray * priceArray;              
        monTableau.push([localItems[i].nom,localItems[i].lentille, quantityArray, priceProduct + ' €']);
        totalAmount = totalAmount + priceProduct;
    }    
}

// affichage du tableau trié
monTableau.sort();
showBasket(sectionBasket, monTableau);

// affichage du prix total de la commande
var amountHTML = document.getElementById('total-account');
amountHTML.innerHTML = totalAmount + ' €';

// gestion du bouton vider mon panier 
var buttonEmptyBasket = document.getElementById('link-to-cancel');
buttonEmptyBasket.onclick = function () {
    localStorage.clear();
    window.location.reload();
};

var sentContact = new contact("bonjour","bonjour","bonjour","bonjour");
console.log(sentContact);
