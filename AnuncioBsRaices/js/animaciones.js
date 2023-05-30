
const $gif= document.getElementById('gif');

export function mostrarGifCarga() {
    $gif.classList.remove('escondido');
    
    setTimeout(function() {
      $gif.classList.add('escondido');
    }, 2000);
  }
  
 