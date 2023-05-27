// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// while / do while

// Solucion con strings
let repeat = true;
let texts = '';

while (repeat === true) {
  text = prompt('Ingrese una cadena de texto');

  if (texts === '') {
    texts = text;
  } else {
    texts = texts + '-' + text;
  }

  repeat = confirm(
    'Desea ingresar otra cadena de texto?'
  );
}

alert(texts);

// Solucion con arrays
// let repeat = true;
// const texts = [];

// while (repeat === true) {
//   text = prompt('Ingrese una cadena de texto');

// texts.push(text);

//   repeat = confirm(
//     'Desea ingresar otra cadena de texto?'
//   );
// }

// const textsJoined = texts.join('-');
// alert(textsJoined);
