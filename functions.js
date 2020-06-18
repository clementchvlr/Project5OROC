//fonction d'ajout d'une image
function addImageProduit (section, source) {
    var productImage = document.createElement('img');
    productImage.src = source;
    productImage.id = 'image-produit';
    section.appendChild(productImage);
}

//fonction d'ajout du nom
function addNomProduit ( section, nom ) {
    var productName = document.createElement('h2');
    productName.innerHTML = nom;
    productName.id = 'nom-produit';
    section.appendChild(productName);
}

//fonction d'ajout du prix
function addPrixProduit ( section, prix ) {
    var productPrice = document.createElement('h4');
    productPrice.innerHTML = prix/100 + ' €';
    productPrice.id = 'prix-produit';
    section.appendChild(productPrice);
}

//fonction de construction d'un produit en vente
function buildProductInSell (section, nomProduit, source, nom, prix) {
    const productInSell = document.createElement('a');
    productInSell.href = 'details-produit.html?' + nomProduit;
    productInSell.id = 'product-in-sell';
    productInSell.classList.add("col-lg-4" , "col-md-6" , "col-sm-12");
    addImageProduit(productInSell, source);
    addNomProduit(productInSell, nom);
    addPrixProduit(productInSell, prix);
    section.appendChild(productInSell);
}

function showBasket(section, table){
    if (table.length == 0){
        const emptyBasket = document.createElement('div');
        emptyBasket.id = 'empty-basket';
        emptyBasket.innerHTML = 'Votre panier est vide.';
        section.appendChild(emptyBasket);
    } else {
        for (let i=0; i<table.length; i++){
            var productRecap = document.createElement('ul');
            productRecap.id = 'product-recap';
            for (let j=0; j<table[i].length; j++){
                var productDetails = document.createElement('li');
                productDetails.innerHTML = table[i][j];
                productRecap.appendChild(productDetails);
            }
            section.appendChild(productRecap);
        }
    }
}

// fonction permettant d'ajouter des éléments HTML <option> à un <select>
function creationOption(section, lenses, value){
    const option = document.createElement('option');
    option.innerHTML = lenses;
    option.value = value;
    section.appendChild(option);
}

function fermerPopUp(){
    document.getElementById('pop-up-fond').style.display = 'none';
}

function afficherPopUp(){
    document.getElementById('pop-up-fond').style.display = 'flex';
}