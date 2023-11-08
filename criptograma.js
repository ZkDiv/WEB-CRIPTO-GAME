const grid = document.getElementById('grid');

for (let i = 0; i < 165; i++) {
  const square = document.createElement('div');
  square.className = 'square';
  square.contentEditable = true;
  square.addEventListener('input', function (e) {
    if (e.target.textContent.length > 1) {
      e.target.textContent = e.target.textContent[0];
    }
  });
  grid.appendChild(square);
}