//requête http effectué à l'aide de fetch et d'une fonction asynchrone
const showProducts = async function () {
    
    const url = 'http://localhost:3000/api/cameras';
    const productsList = document.getElementById('productsList');
    
    var getProducts = await fetch(url)
        .then(function(response){
            if (response.ok){
                return response
            } else {
                productsList.innerHTML = 'erreur 404';
            }
        })
        .catch(function(error){
            productsList.innerHTML = 'erreur de type ' + error.message + ' lors de la requête HTTP';
        });

    const products = await getProducts.json();
    

    //fonction qui parcoure chaque élément de notre tableau de données
    products.forEach(element => {

        //construction d'un produit en vente
        buildProductInSell(productsList, element.name, element.imageUrl, element.name, element.price);
    }); 
}

showProducts();