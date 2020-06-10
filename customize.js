const custoProduct = async function () {
    var getProducts = await fetch('http://localhost:3000/api/cameras');
    var products = await getProducts.json();

    var customizationProduct = document.getElementById('customizationProduct');

    if ( window.location.search == '?' + 'firstLink') {
        customizationProduct.innerHTML = 'bonjour';
    } else if ( window.location.search == '?' + 'secondLink') {
        customizationProduct.innerHTML = 'salut les amis';
    } else {
        console.log('produit pas trouvé');
    }   
}

custoProduct();
