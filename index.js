//requête http effectué à l'aide de fetch et d'une fonction asynchrone
const showProducts = async function () {
    
    const url = 'http://localhost:3000/api/cameras';
    
    var getProducts = await fetch(url)
        .then(function(response){
            if (response.ok){
                return response
            } else {
                console.log(response.status)
            }
        })
        .catch(function(error){
            console.log(error);
        });

    const products = await getProducts.json();
    const productsList = document.getElementById('productsList');

    //fonction qui parcoure chaque élément de notre tableau de données
    products.forEach(element => {

        //construction d'un produit en vente
        buildProductInSell(productsList, element.name, element.imageUrl, element.name, element.price);
    }); 
}

showProducts();