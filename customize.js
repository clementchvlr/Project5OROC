const customizeYourProduct = async function () {
    var getProducts = await fetch('http://localhost:3000/api/cameras');
    var products = await getProducts.json();

    var customizationProduct = document.getElementById('customization-of-product');
    
    products.forEach(element => {

        if ( '?' + element._id == window.location.search) {
            buildProductToCustomize(customizationProduct, element.imageUrl, element.name, element.price, element.description, element.lenses);
            console.log(element.name);
            var btn = document.getElementById ('button-basket');
            btn.onclick = function addToBasket() {
                var lengthOfStorage = localStorage.length + 1;
                var lensesSelect = document.getElementById("lenses-select").options[document.getElementById('lenses-select').selectedIndex].text;
                var value = [element.name, element.price, lensesSelect];
                localStorage.setItem('produit' + lengthOfStorage , value);
            }
        } else {
        }
    });
}

customizeYourProduct();








/*

récupérer la lentille sélectionner
lenses-select = document.getElementById("lenses-select").options[document.getElementById('lenses-select').selectedIndex].text;

*/