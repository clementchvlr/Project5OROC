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
    productPrice.innerHTML = price + '€';
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
    var buttonBasket = document.createElement('button');
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

function buildProductInSell (section, id, src, name, price, idProduct) {
    const productInSell = document.createElement('a');
    productInSell.href = 'customize.html?' + idProduct;
    productInSell.id = id;
    productInSell.classList.add("col-xl-5" , "col-md-5");

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
    addButtonBasket(productToCustoDetails);

    section.appendChild(productToCustoImage);
    section.appendChild(productToCustoDetails);


}





