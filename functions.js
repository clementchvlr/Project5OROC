function addImage ( section , id , src ) {
    var productImage = document.createElement('img');
    productImage.id = id;
    productImage.src = src;
    section.appendChild(productImage);
    return productImage;
}

function addName ( section , id , name ) {
    var productName = document.createElement('h2');
    productName.innerHTML = name;
    productName.id = id;
    section.appendChild(productName);
    return productName;
}

function addPrice ( section , id , price ) {
    var productPrice = document.createElement('h4');
    productPrice.innerHTML = price/100 + '€';
    productPrice.id = id;
    section.appendChild(productPrice);
    return productPrice;
}

function addDescription ( section , id , description ) {
    var productDescription = document.createElement('p');
    productDescription.innerHTML = description;
    productDescription.id = id;
    section.appendChild(productDescription);
    return productDescription;
}

function addButtonBasket(section) {
    var buttonBasket = document.createElement('a');
    buttonBasket.href = 'basket.html';
    buttonBasket.id = 'button-basket';
    buttonBasket.innerHTML = 'ajouter au panier';
    section.appendChild(buttonBasket);
    return buttonBasket;
}

function addLensesSelect( section, lensesChoice) {
    const lensesLabel = document.createElement('label');
    lensesLabel.htmlFor = 'lenses-select';
    lensesLabel.innerHTML = 'Choix de la lentille';

    const lensesOption = document.createElement('select');
    lensesOption.name = 'lenses';
    lensesOption.id = 'lenses-select';

    for (let i = 0; i < lensesChoice.length ; i++) {
        var lensesId = document.createElement('option');
        lensesId.value = 'lenses0' + i;
        lensesId.innerHTML = lensesChoice[i];

        lensesOption.appendChild(lensesId);
      }

    section.appendChild(lensesLabel);
    section.appendChild(lensesOption);
}

function addQuantitySelect( section, number) {
    const quantityLabel = document.createElement('label');
    quantityLabel.htmlFor = 'quantity-select';
    quantityLabel.innerHTML = 'Quantité';

    const quantityOption = document.createElement('select');
    quantityOption.name = 'quantity';
    quantityOption.id = 'quantity-select';

    for (let i = 1; i <= number  ; i++) {
        var quantityId = document.createElement('option');
        quantityId.value = 'option' + i;
        quantityId.innerHTML = i;

        quantityOption.appendChild(quantityId);
      }

    section.appendChild(quantityLabel);
    section.appendChild(quantityOption);
}



function buildProductInSell (section, id, src, name, price, idProduct) {
    const productInSell = document.createElement('a');
    productInSell.href = 'customize.html?' + idProduct;
    productInSell.id = id;
    productInSell.classList.add("col-lg-4" , "col-md-6" , "col-sm-12");

    addImage(productInSell, 'product-image', src)
    addName(productInSell, 'product-name', name);
    addPrice(productInSell, 'product-price', price);

    section.appendChild(productInSell);
}

function buildProductToCustomize(section, src, name, price, description, lensesChoice) {
    const productToCustoImage = document.createElement('div');
    productToCustoImage.id = 'product-custo-image';
    productToCustoImage.classList.add('col-xl-6');

    addImage(productToCustoImage, 'product-image', src);

    const productToCustoDetails = document.createElement('div');
    productToCustoDetails.id = 'product-custo-details';
    productToCustoDetails.classList.add('col-xl-6');

    addName(productToCustoDetails, 'product-name', name);
    addPrice(productToCustoDetails, 'product-price', price);
    addDescription(productToCustoDetails, 'product-description', description);
    addLensesSelect(productToCustoDetails, lensesChoice);
    addQuantitySelect(productToCustoDetails, 10);
    addButtonBasket(productToCustoDetails);

    section.appendChild(productToCustoImage);
    section.appendChild(productToCustoDetails);
}

function showBasket(section, table){
    var basketTitle = document.createElement('h5');
    basketTitle.className = 'basket-title';
    basketTitle.innerHTML = 'Mon panier';

    section.appendChild(basketTitle);
    
    
    if (table.length == 0){
        const emptyBasket = document.createElement('div');
        emptyBasket.innerHTML = 'votre panier est vide';
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

    const linkToCancel = document.createElement('button');
    linkToCancel.innerHTML = 'vider mon panier';
    linkToCancel.id = 'link-to-cancel';

    const linkToShop = document.createElement('a');
    linkToShop.innerHTML = 'continuer mes achats';
    linkToShop.href = 'index.html';
    linkToShop.id = 'link-to-shop';

    section.appendChild(linkToCancel);
    section.appendChild(linkToShop);

}

// function d'ajout du formulaire

function addForm(section, id){

    const formSend = document.createElement('form')
    formSend.id = id;

    const formFirstName = document.createElement('input');
    formFirstName.type = 'text';
    formFirstName.name = 'Prénom';
    formFirstName.placeholder = 'Prénom';
    formSend.appendChild(formFirstName);

    const formName = document.createElement('input');
    formName.type = 'text';
    formFirstName.name = 'Nom';
    formName.placeholder = 'Nom';
    formSend.appendChild(formName);
    
    const formAdress = document.createElement('input');
    formAdress.type = 'text';
    formFirstName.name = 'Adresse';
    formAdress.placeholder = 'Adresse';
    formSend.appendChild(formAdress);

    const formCity = document.createElement('input');
    formCity.type = 'text';
    formFirstName.name = 'Ville';
    formCity.placeholder = 'Ville';
    formSend.appendChild(formCity);

    const formMail = document.createElement('input');
    formMail.type = 'email';
    formFirstName.name = 'Adresse électronique';
    formMail.placeholder = 'Adresse électronique';
    formSend.appendChild(formMail);

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'envoyer';
    formSend.appendChild(submitBtn);


    section.appendChild(formSend);




}