
  // Affiche le bouton quand on descend de 100px
  window.onscroll = function() {
    let btn = document.getElementById("remonter");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Fonction pour remonter en haut
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
 //cacher les element de menu
function togglemenu(){
  var menu=document.getElementById("elmenu");menu.style.display= (menu.style.display==='block') ? 'none' : 'block';
}

function togglemarque(){
  var menu=document.getElementById("marques");marques.style.display= (marques.style.display==='block') ? 'none' : 'block';}

const etoiles = document.querySelectorAll('.etoile');

etoiles.forEach((etoile) => {
  etoile.addEventListener('click', () => {
    const note = etoile.dataset.etoile;
    etoiles.forEach((e) => {
      if (e.dataset.etoile <= note) {
        e.classList.add('remplie');
      } else {
        e.classList.remove('remplie');
      }
    });
  });
});




function greetUser(){
  const time = new Date().getHours();
  if (time < 11) { return "bonjour";
} else if (time < 18) { return "bonsoir";} else { return "bonne nuit"}
}
document.getElementById("demo").innerHTML = greetUser();

function myFuncEvoie(){ alert("merci pour votre avis");}
