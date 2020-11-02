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
            const produitPourPanier = 
            panierBouton.onclick = function addToBasket(/* productId*/) {

                // envoyer un id en paramètre, parser le localstorage, checker si l'élement existe ou pas (products[productId])
                // si il existe pas, l'ajouter
                // si il existe, 
                
                //récupération de la lentille choisie
                const lentilleChoisie = document.getElementById('selection-lentille').options[document.getElementById('selection-lentille').selectedIndex].text;
                
                //récupération de la quantité choisie
                const quantiteChoisie = document.getElementById('selection-quantite').options[document.getElementById('selection-quantite').selectedIndex].text;
                
                //stockage des données choisies dans un tableau

                productsDansPanier = [];
                productsDansPanier = productsDansPanier.p[JSON.stringify(element)];
                console.log(productsDansPanier)
                localStorage.setItem('products', productsDansPanier);
                const donneesProduit  = [element.name, lentilleChoisie, quantiteChoisie + ' pièce(s)', (element.price/100) * quantiteChoisie + ' €'];
                
                //localStorage.setItem('produit' + longueurStorage, donneesProduit);
                
                //parcours du local storage pour voir si un produit similaire est déjà présent 
                /*if(localStorage.length !== 0 ){

                    for (i = 1 ; i <= localStorage.length ; i++){

                        const donneesSeparees = localStorage.getItem('produit' + i).split(',');


                        //console.log(donneesSeparees);
    
                        if ( (element.name === donneesSeparees[0]) && (lentilleChoisie === donneesSeparees[1]) ){
                            
                            console.log(donneesProduit[2]);
                            console.log(parseInt(donneesProduit[2].slice(0, -9)));
                            console.log(quantiteChoisie);
                            donneesProduit[2] = (parseInt(donneesProduit[2].slice(0, -9)) + parseInt(quantiteChoisie)) + ' pièce(s)';
                            
                            
                            localStorage.setItem('produit' + longueurStorage, donneesProduit);
                            console.log('vous avez déjà un produit comme celui ci');
                            break;
                            
                        }
                    }

                } else {
                    
                }*/

                afficherPopUp();
                  
            }
        }
    });
}
customizeYourProduct();