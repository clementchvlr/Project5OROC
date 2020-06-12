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

var productBasket = document.getElementById('product-basket');


showBasket(productBasket, monTableau);

const cancelBtn = document.getElementById('link-to-cancel');
cancelBtn.onclick = function cancelBasket(productBasket){
    localStorage.clear();
    window.location.reload();
    
}; 
