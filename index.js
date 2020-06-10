//requête http effectué à l'aide de fetch et d'une fonction asynchrone
const showProducts = async function () {
    var getProducts = await fetch('http://localhost:3000/api/cameras');
    var products = await getProducts.json();

    var productsList = document.getElementById('productsList');

    //fonction qui parcoure chaque élément de notre tableau de données
    products.forEach(element => {
        buidProductInSell(productsList , 'product-in-sell' , element.imageUrl , element.name , element.price , element._id );
    });   
}

showProducts();