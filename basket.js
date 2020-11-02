/*function basketActualisation (){
    var basketArray = [];
    for ( i = 1 ; i <= localStorage.length ; i++ ) {    
        var productValue = localStorage.getItem('produit' + i);
        var productItem = productValue.split(',');
        basketArray.push(productItem);
    }
    basketArray.sort(function(a,b){
        if (a < b){
            return -1;
        }
        if (a > b ){
            return 1;
        }
    });
    return basketArray
}

var monTableau = basketActualisation();
var totalAccount = 0;

for (i = 0; i<monTableau.length; i++){
    totalAccount = totalAccount + parseInt(monTableau[i][3].slice(0, -2));
}

const Account = document.getElementById('total-account');
Account.innerHTML = 'montant total: ' + totalAccount + ' €';

var productBasket = document.getElementById('product-basket');

showBasket(productBasket, monTableau);

const cancelBtn = document.getElementById('link-to-cancel');
cancelBtn.onclick = function cancelBasket(productBasket){
    localStorage.clear();
    window.location.reload();
};*/

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Nom:', e.target.firstname.value)
    console.log('Prénom:', e.target.name.value)
    console.log('Email:', e.target.adress.value)
    console.log('Message:', e.target.city.value)
    console.log('Message:', e.target.email.value)
});