// function qui élabore un produit

function buildProduct(name, source, price) {
    var product = document.createElement('div'); product.id = 'product';
    var productName = document.createElement('h2'); productName.id = 'product-name';
    var productImage = document.createElement('img'); productImage.id = 'product-image';
    var productPrice = document.createElement('h4'); productPrice.id = 'product-price';
    var button = document.createElement('button'); button.id = 'show-product'; button.classList.add('btn-show');

    productName.innerHTML = name;
    productImage.src = source;
    productPrice.innerHTML = price + ' €' ;
    button.innerHTML = 'Voir le modèle'; 

    product.appendChild(productImage);
    product.appendChild(productName);
    product.appendChild(productPrice);
    product.appendChild(button);

    return product
} 

// requête http et affichage après ajout de chaque produit à la liste


//requête http effectué à la de fetch et d'une fonction asynchrone
const showProducts = async function () {
    var getProducts = await fetch('http://localhost:3000/api/cameras');
    var products = await getProducts.json();

    var productsList = document.getElementById('productsList');

    //fonction qui parcoure chaque élément de notre tableau de données
    products.forEach(element => {

        var monProduit = buildProduct(element.name , element.imageUrl, (element.price)/100);
        productsList.appendChild(monProduit);
 
    });
}

showProducts();





/* fonction brouillon

const getUsers = async function () {
    var response = await fetch('http://localhost:3000/api/cameras');
    var data = await response.json();
    console.log(data);    
}*/