function basketActualisation (){
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
    console.log(basketArray)
    return basketArray
}

var monTableau = basketActualisation();
console.log(monTableau);

var totalAccount = 0;

for (i = 0; i<monTableau.length; i++){
    totalAccount = totalAccount + parseInt(monTableau[i][3].slice(0, -2));
    console.log(totalAccount);
}

const Account = document.getElementById('total-account');
Account.innerHTML = 'montant total: ' + totalAccount + ' €';

var productBasket = document.getElementById('product-basket');

showBasket(productBasket, monTableau);

const cancelBtn = document.getElementById('link-to-cancel');
cancelBtn.onclick = function cancelBasket(productBasket){
    localStorage.clear();
    window.location.reload();
}; 

const form = document.getElementById('form');
addForm(form, 'form-contact');
