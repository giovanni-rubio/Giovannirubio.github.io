/*
Creacion de funcion en Javscript
function multiplica(num1,num2) {
  let resultado = num1 * num2;
  return resultado;
}


multiplica(4, 7);
multiplica(20, 20);
multiplica(0.5, 3);
*/


document.querySelector('html').onclick = function() {
    alert('¡Wow! ¡Mira como cambia la imagen!');
}


let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/sonic.jpg') {
      miImage.setAttribute('src','images/sonic2.jpg');
    } else {
      miImage.setAttribute('src', 'images/sonic.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Sonic es un super juego, ' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Sonic es un super juego,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}