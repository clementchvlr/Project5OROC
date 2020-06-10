const customizeYourProduct = async function () {
    var getProducts = await fetch('http://localhost:3000/api/cameras');
    var products = await getProducts.json();

    var customizationProduct = document.getElementById('customization-of-product');
    
    products.forEach(element => {

        if ( '?' + element._id == window.location.search) {
            buildProductToCustomize(customizationProduct, element.imageUrl, element.name, element.price, element.description, element.lenses);
        } else {
        }

    });   
}

customizeYourProduct();