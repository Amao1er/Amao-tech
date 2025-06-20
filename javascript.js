
  // Affiche le bouton quand on descend de 100px
  window.onscroll = function() {
    let btn = document.getElementById("topBtn");
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
 
function toggleclosemenu(){
  var menu=document.getElementById("close");menu.style.display= (menu.style.display==='block') ? 'none' : 'block';
}
function togglemarquemenu(){
  var menu=document.getElementById("marques");marques.style.display= (marques.style.display==='block') ? 'none' : 'block';
}
