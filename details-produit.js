//récupération des données de l'API et traitement afin d'afficher la page de personnalisation du produit sélectionné
const customizeYourProduct = async function () {
    var getProducts = await fetch('http://localhost:3000/api/cameras');
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

            //ajout du produit souhaité dans le panier
            const panierBouton = document.getElementById ('ajout-panier');
            panierBouton.onclick = function addToBasket() {
                const longueurStorage = localStorage.length + 1;
                const lentilleChoisie = document.getElementById('selection-lentille').options[document.getElementById('selection-lentille').selectedIndex].text;
                const quantiteChoisie = document.getElementById('selection-quantite').options[document.getElementById('selection-quantite').selectedIndex].text;
                const donneesProduit  = [element.name, lentilleChoisie, quantiteChoisie + ' pièce(s)', (element.price/100) * quantiteChoisie + ' €'];
                localStorage.setItem('produit' + longueurStorage, donneesProduit);
                afficherPopUp();
                
                //test si produit déjà existant
            }
        }
    });
}
customizeYourProduct();