(function() {

    //Déclarer les variables

    //On récupère l'élément image
    let elcardImg = document.querySelectorAll('img');

    let carteRetourne = false;
    
    let premImg, secondImg;

    //Initialiser le compteur à zéro pour la condition gagnante
    let compteur = 0;

    //Fonction
    function flipCardImage(e) {

        e.currentTarget.classList.remove('hidden');
    
        if (!carteRetourne) {
            //Premier clic
            carteRetourne = true;
            premImg = e.currentTarget;
            e.currentTarget.classList.add('no-event');
            firstDivData = e.currentTarget.parentNode;
           
            
        } else {
            // second clic
            carteRetourne = false;
            secondImg = e.currentTarget;
            secondDivData = e.currentTarget.parentNode;
            premImg.classList.remove('no-event');
    
            if (firstDivData.dataset.jsImg === secondDivData.dataset.jsImg
                
                ) {
                    //On verouille le clic sur les images valides
                    premImg.classList.add('no-event');
                    secondImg.classList.add('no-event');
                    //On incrémente le compteur de 1 pour arriver à la victoire
                    compteur++;
                    
    
            } else {
                //On cache les cartes
                secondImg.classList.add('hidden');
                premImg.classList.add('hidden');
                
            }
            //Pour déterminer la condition gagnante
            if (compteur === elcardImg.length / 2){
                //On injecte win dans <div class="gallery gallery--4" data-js-gallery> pour la condition gagante
                premImg.parentNode.parentNode.classList.add("win");

            }
    
        }
    
    
    }

    //On ajoute l'eventlistener click
    elcardImg.forEach(carte => carte.addEventListener('click', flipCardImage));
    
    })();