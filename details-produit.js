//récupération des données de l'API et traitement afin d'afficher la page de personnalisation du produit sélectionné
const customizeYourProduct = async function () {
    const url = 'http://localhost:3000/api/cameras';

    const getProducts = await fetch(url)
        .then(function(response){
            return response;
        })
        .catch(function(error){
            console.log(error);
        });

    var products = await getProducts.json();
    
    //travail sur chaque élément du tableau de données
    products.forEach(element => {

        // récupération des éléments du DOM
        const imageProduit = document.getElementById('image-produit');
        const nomProduit = document.getElementById('nom-produit');
        const prixProduit = document.getElementById('prix-produit');
        const descriptionProduit = document.getElementById('description-produit');
        const lentilleSelection = document.getElementById('selection-lentille'); 
        
        

        //test de correspondance sur l'url de la page concernée pour afficher le produit sélectionné
        if ( '?' + element.name.replace(/ /g, '%20') == window.location.search) {
            imageProduit.src = element.imageUrl;
            nomProduit.innerHTML = element.name;
            prixProduit.innerHTML = (element.price)/100 + ' €';
            descriptionProduit.innerHTML = element.description;

            //boucle sur les différentes lentilles puis intégration dans le select
            for (let i = 0 ; i < element.lenses.length ; i++) {
                creationOption(lentilleSelection, element.lenses[i], 'lentille' + i);
            }

            
            // ESSAI
            const buttonBasket = document.getElementById('ajout-panier');

            buttonBasket.onclick = function ajouterAuPanier () {
            //récupération du nom
            const nameProduct = document.getElementById('nom-produit').textContent;
            //récupération du prix
            const priceProduct = document.getElementById('prix-produit').textContent;
            //récupération de la lentille choisie
            const lentilleChoisie = document.getElementById('selection-lentille').options[document.getElementById('selection-lentille').selectedIndex].text;
            //récupération de la quantité choisie
            const quantiteChoisie = document.getElementById('selection-quantite').options[document.getElementById('selection-quantite').selectedIndex].text;
            // définition du produit choisi
            const myProductChoose = Object.fromEntries([['nom',nameProduct], ['prix', priceProduct],['quantité', quantiteChoisie], ['lentille',lentilleChoisie]]);
        
            if (parseInt(myProductChoose.quantité) === 1) {
                alert( myProductChoose.quantité + ' appareil ' + myProductChoose.nom + ', avec une lentille "' + myProductChoose.lentille + '" a été ajouté à votre panier!');
            } else {
                alert( myProductChoose.quantité + ' appareils ' + myProductChoose.nom + ', avec une lentille "' + myProductChoose.lentille + '" ont été ajoutés à votre panier!');
            };

            let items = [];

            if (localStorage.length === 0) {
                items.push(myProductChoose);
                localStorage.setItem('items', JSON.stringify(items));


            } else {
                var localItems = JSON.parse(localStorage.getItem('items'));
                var check = false;

                for ( i = 0 ; i <= localItems.length - 1 ; i++ ) {                    
                    if ( localItems[i].nom === myProductChoose.nom && localItems[i].lentille === myProductChoose.lentille ) {
                    
                        quantityNumb = parseInt(localItems[i].quantité);
                        quantityNumb = quantityNumb + parseInt(myProductChoose.quantité);
                        localItems[i].quantité = quantityNumb.toString();
                        localStorage.setItem('items', JSON.stringify(localItems));
                        check = true;
                    }
                }

                if ( check === false ) {
                    localItems.push(myProductChoose);
                    localStorage.setItem('items', JSON.stringify(localItems));
                }      
            };
        };
    }});
}
customizeYourProduct();