const grid = document.getElementById("grid");

function createIcon(iconClass, isBlocked) {
  const icon = document.createElement("i");
  icon.className = `fas ${iconClass}`;
  icon.style.fontSize = "15px";
  icon.style.display = "flex";
  icon.style.float = "left"; // Isso centraliza o ícone verticalmente

  if (isBlocked) {
    icon.classList.add("blocked-icon");
    // Ajuste o tamanho conforme necessário
  }

  return icon;
}

const icons = [
  "fa-pen",
  "fa-bolt",
  "fa-heart",
  "fa-star",
  "fa-flag",
  "fa-key",
  "fa-fish",
  "fa-envelope",
  "fa-lightbulb",
  "fa-cog",
  "fa-fire",
  "fa-ghost",
  "fa-paper-plane",
  "fa-sun",
  "fa-lock",
  "fa-music",
  "fa-cloud",
  "fa-bug",
  "fa-umbrella",
  "fa-bell",
  "fa-phone",
  "fa-house",
  "fa-eye"
];

for (let i = 0; i < 165; i++) {
  const square = document.createElement("div");
  square.className = "square";

  let iconClass = "fa-bolt"; // Ícone padrão
  let displayIcon = true;

  // Lógica para determinar a classe do ícone
  if ([0, 17, 18, 29, 78, 123].includes(i)) {
    iconClass = "fa-heart";
  } else if ([1].includes(i)) {
    iconClass = "fa-star";
  } else if ([3, 33, 154].includes(i)) {
    iconClass = "fa-phone";
  } else if ([11, 121].includes(i)) {
    iconClass = "fa-flag";
  } else if ([12, 59, 83, 95, 97, 105, 110, 113, 144].includes(i)) {
    iconClass = "fa-key";
  } else if (
    [14, 34, 36, 56, 71, 82, 90, 92, 115, 118, 134, 155, 161].includes(i)
  ) {
    iconClass = "fa-fish";
  } else if ([15].includes(i)) {
    iconClass = "fa-envelope";
  } else if ([16, 39, 44, 47, 49, 61, 66, 96, 99, 107, 122, 157].includes(i)) {
    iconClass = "fa-lightbulb";
  } else if ([22].includes(i)) {
    iconClass = "fa-cog";
  } else if ([23, 89, 108, 133, 143, 160].includes(i)) {
    iconClass = "fa-fire";
  } else if ([25, 55, 67, 101, 104, 117, 132, 159].includes(i)) {
    iconClass = "fa-ghost";
  } else if ([26, 28, 30, 40, 84].includes(i)) {
    iconClass = "fa-tree";
  } else if ([27, 37, 38, 48, 60, 88, 94, 106, 112, 146].includes(i)) {
    iconClass = "fa-bolt";
  } else if ([45].includes(i)) {
    iconClass = "fa-sun";
  } else if ([58, 93, 103, 111, 116, 135].includes(i)) {
    iconClass = "fa-lock";
  } else if ([62, 98, 119, 145, 156].includes(i)) {
    iconClass = "fa-music";
  } else if ([69, 80].includes(i)) {
    iconClass = "fa-cloud";
  } else if ([70, 81, 100].includes(i)) {
    iconClass = "fa-bug";
  } else if ([77].includes(i)) {
    iconClass = "fa-umbrella";
  } else if ([124].includes(i)) {
    iconClass = "fa-bell";
  } else {
    displayIcon = false;
  }

  // Lógica para definir qual ícone usar com base no índice
  if (i === 2) {
    iconClass = "fa-house"; // Ícone específico para o índice 2
  } else if (i === 50) {
    iconClass = "fa-pen"; // Ícone específico para o índice 50
  }

  if (displayIcon) {
    const icon = createIcon(iconClass, false);
    square.appendChild(icon);
  }

  // Lógica para verificar se o quadrado está bloqueado
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
    square.classList.add("blocked");
  } else {
    square.contentEditable = true; // Permite a edição
  }

  // Define a cor de fundo para índices específicos
  if (
    [2, 13, 24, 35, 46, 57, 68, 79, 91, 102, 114, 125, 136, 147, 158].includes(
      i
    )
  ) {
    square.style.backgroundColor = "#B8D8DE";
  }

  square.addEventListener("input", function (e) {
    let inputText = e.target.textContent;
    inputText = inputText.replace(/[^a-zA-Z]/g, "").toUpperCase();
    inputText = inputText.charAt(0).toUpperCase();

    e.target.innerHTML = "";

    const letterSpan = document.createElement("span");
    letterSpan.textContent = inputText;
    letterSpan.classList.add("entered-letter");
    e.target.appendChild(letterSpan);

    // Exibe o ícone, se aplicável
    if (displayIcon) {
      const icon = createIcon(iconClass, false);
      icon.style.position = "absolute";
      e.target.appendChild(icon);
    }

    e.target.style.position = "relative";
    e.target.style.overflow = "hidden";
    e.target.style.textAlign = "right";
  });

  grid.appendChild(square);
}
