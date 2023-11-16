const grid = document.getElementById('grid');
const icons = ['fa-smile', 'fa-heart', 'fa-star', 'fa-flag', 'fa-key', 'fa-check', 'fa-envelope', 'fa-lightbulb', 'fa-cog', 'fa-globe', 'fa-thumbs-up', 'fa-paper-plane', 'fa-bolt', 'fa-shield-alt', 'fa-lock'];

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
    (i >= 162 && i < 165)
  ) {
    square.contentEditable = false; // Bloqueia a edição
    square.classList.add('blocked');
  } else {
    square.contentEditable = true; // Permite a edição

    let iconClass = 'fa-smile'; // Ícone padrão

    // Lógica para definir qual ícone usar com base no índice
    if (i === 2) {
      iconClass = 'fa-heart'; // Ícone específico para o índice 25
    } else if (i === 50) {
      iconClass = 'fa-star'; // Ícone específico para o índice 50
    }

    const icon = document.createElement('i');
    icon.classList.add('fas', iconClass);
    icon.style.fontSize = '15px'; // Ajuste o tamanho conforme necessário
    square.appendChild(icon);

    const letter = document.createElement('span');
    letter.className = 'letter';
    square.appendChild(letter);

    let hasLetter = false;

    square.addEventListener('input', function (e) {
      const inputText = e.target.textContent;

      if (!hasLetter && inputText.length > 0) {
        e.target.textContent = inputText[0];
        letter.textContent = inputText.toUpperCase();
        hasLetter = true;
      } else {
        e.target.textContent = '';
        letter.textContent = '';
        hasLetter = false;
      }
    });
  }

  grid.appendChild(square);
}
