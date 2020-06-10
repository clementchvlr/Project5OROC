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
    productPrice.innerHTML = price;
    productPrice.id = id;
    section.appendChild(productPrice);
    return productPrice;
}

function buidProductInSell (section, id, src, name, price) {
    const productInSell = document.createElement('div');
    productInSell.id = id;

    addImage(productInSell, 'product-image', src)
    addName(productInSell, 'product-name', name);
    addPrice(productInSell, 'product-price', price);

    section.appendChild(productInSell);

}



