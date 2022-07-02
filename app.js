const app = {

    citations: [
        `"Le meilleur moyen de résister à la tentation c'est d'y céder" - Oscar Wilde`,
        `"Qui mange une noix de coco, fais confiance à son anus" - poule`,
        `"Qui pisse fasse au vent se rince les dents" Anonyme`,
        `"Le barbecue, en gros, c'est un appareil qui te permet de manger des saucisses pratiquement crues mais avec les doigts bien cuits.= - Coluche`
    ],
   
    init: function (){
        console.log("init")
        // Au lancement de la fonction init, je lance les deux fonctions
        app.getCitationId();
        app.showCitationGenerated();
    },
        /**
         * Represents une citation selon id
         * @constructor 
         */
    getCitationId: function(){
        // Je récupère dans une variable le formulaire
        const form = document.querySelector('form');
        // J'ajoute un écouteur d'évènement sur le submit du formulaire
        form.addEventListener("submit",(event)=>{
            //j'enlève le comportement par défaut de l'event c'est-à-dire le rechargement de la page lors du submit
            event.preventDefault();
            // Je lance la fonction pour ajouter les citations
            app.getAddCitation();
        })

    },

    getAddCitation: function (){
        /** je récupère l'input citation*/ 
        const citation = document.querySelector("#citation");
        // je récupère l'id citations  à l'endroit où je souhaite afficher le contenu de la citation écrite par l'utilisateur
        const citations = document.querySelector("#citations")
        //Je récupère la valeur de l'input citation, ce qu'a écrit l'utilisateur
        const newCitation = citation.value;
        // si un h2 existe dans le dom, alors je le supprime
        if (document.querySelector("h2")){
            document.querySelector("h2").remove();
        }
        // Je créé un tag H2
        const h2 = document.createElement("h2");
        // Je lui donne la valeur de l'input h2
        h2.textContent = newCitation;
        // J'insère le tagname h2 dans la div citations
        citations.appendChild(h2);
        // J'ajoute ma nouvelle citation au tableau de citation
        app.citations.push(newCitation);
    },

    showCitationGenerated:function(){
        // récupérer le boutton
        const button = document.querySelector('#Generator');
        // A l'écoute du click, je lance la fonction 
        button.addEventListener("click",()=>{
            app.getCitationGenerated();
        });
    },
        // fonction qui sert à générer une citation
    getCitationGenerated: function(){
        console.log("je suis dans ma fonction getCitationGenerated");
        // Si un h2 est présent dans mon document, alors je le supprime
        if (document.querySelector("h2")){
            document.querySelector("h2").remove();
        }
        // Je récupère la div à l'endroit où je veux insérer ma citation
        const button = document.querySelector('#Generator');
        // Je randomise mes citations
        const citation = Math.floor(Math.random()*app.citations.length);
        const randomCitation = app.citations[citation];
        // Je créé un tag h2
        const h2 = document.createElement("h2");
        // Je donne la valeur de ma citation à mon tag h2
        h2.textContent = randomCitation;
        // j'insère mon h2 dans la div 
        button.appendChild(h2);
    }
};

// J'initialise mon app seulement quand ma page a finit de se charger
document.addEventListener('DOMContentLoaded', app.init );