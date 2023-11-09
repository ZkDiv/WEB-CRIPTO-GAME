const grid = document.getElementById('grid');

for (let i = 0; i < 165; i++) {
  const square = document.createElement('div');
  square.className = 'square';
 
  if (
    (i >= 4 && i < 11) ||
    (i >= 19 && i < 22) ||
    (i >= 31 && i < 33) ||
    (i >= 41 && i < 44) ||
    (i >= 50 && i < 55) ||
    (i >= 63 && i < 66) ||
    (i >= 72 && i < 77) ||
    (i >= 75 && i < 77) ||
    (i >= 85 && i < 88) ||
    (i >= 109 && i < 110) ||
    (i >= 120 && i < 121) ||
    (i >= 126 && i < 132) ||
    (i >= 137 && i < 143) ||
    (i >= 148 && i < 154) ||
    (i >= 162  && i < 165)
      ) {
    square.contentEditable = false; // Bloqueia a edição
    square.classList.add('blocked'); 
  } else {
    square.contentEditable = true; // Permite a edição
  }

  square.addEventListener('input', function (e) {
    if (e.target.textContent.length > 1) {
      e.target.textContent = e.target.textContent[0];
    }
  });
  grid.appendChild(square);
}

// for (let b = 0; b < 15; b++ ) {
//   const number = document.createElement(number)
//   number.innerHTML = b + 1;
//   number.style.fontSize = "1rem";
// }