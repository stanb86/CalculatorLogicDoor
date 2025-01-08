// Pour faire un calcule binaire

function calcul()
   {
     binaire_1 = document.getElementById("binaire_1");
     binaire_2 = document.getElementById("binaire_2");
     porte = document.getElementById("porte");
     if (porte.value=='ET')
     {calculET();}
     if (porte.value=='OU')
     {calculOU();}
     if (porte.value=='OU exclusif')
     {calculOUE();}
     if (porte.value=='NON-ET')
     {calculNONET();}
     if (porte.value=='NON-OU')
     {calculNONOU();}

   }



// 5 fonctions différentes de calculer   
function calculET()
   {
     if (binaire_1.value ==1)
     {if (binaire_2.value ==0)
         {resultat =0}
      else
      {resultat=1}
     }
     else 
         {resultat=0}
     
     document.getElementById("resultat").innerHTML = resultat;
}

function calculOU()
   {
     if (binaire_1.value ==1)
     {if (binaire_2.value ==0)
        {resultat =1}
      else
      {resultat=0}
     }
     else
     {if (binaire2.value ==0)
       {resultat=0}
     
     else
       {resultat=1}
     }
           
     document.getElementById("resultat").innerHTML = resultat;
}


function calculOUE()
   {
     if (binaire_1.value ==1)
     {if (binaire_2.value ==0)
         {resultat =1}
      else
      {resultat=0}
     }
     else 
     {if (binaire_2.value==0)
      {resultat=0}
      else
      {resultat=1}
    }   
     
     document.getElementById("resultat").innerHTML = resultat;
}


function calculNONET()
   {
     if (binaire_1.value ==1)
     {if (binaire_2.value ==0)
         {resultat =1}
      else
      {resultat=0}
     }
     else 
      {resultat=1}
       
     
     document.getElementById("resultat").innerHTML = resultat;
}


function calculNONOU()
   {
     if (binaire_1.value ==1)
     {if (binaire_2.value ==0)
         {resultat =1}
      else
      {resultat=0}
     }
     else 
     {if (binaire_2.value==0)
      {resultat=0}
      else
      {resultat=1}
    }   
     
     document.getElementById("resultat").innerHTML = resultat;
}


// Récupération des éléments
const selector = document.getElementById('background-selector');

// Fonction pour changer le fond de la page
function changeBackground() {
      const selectedValue = selector.value;
          

      // Selon la valeur sélectionnée, on change l'image de fond
      if (selectedValue === 'informatique') {
        document.body.style.backgroundImage = "url('infor2.jpg')";
      } else if (selectedValue === 'nourriture') {
        document.body.style.backgroundImage = "url('food.jpg')";
      } else if (selectedValue === 'animaux') {
        document.body.style.backgroundImage = "url('pets.jpg')";
      } else {
        document.body.style.backgroundImage = ""; // Pas d'image par défaut
      }


      }

        // Détécteur d'événements qui fait les changements en fonction de la sélection
      selector.addEventListener('change', changeBackground);