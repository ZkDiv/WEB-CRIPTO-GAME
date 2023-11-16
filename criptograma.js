const grid = document.getElementById("grid");

function createIcon(iconClass, iconName, isBlocked) {
  const icon = document.createElement("img");
  icon.src = `icons/${iconName}`;
  icon.className = `icon ${iconClass}`;

  if (isBlocked) {
    icon.classList.add("blocked-icon");
  }

  return icon;
}

let rowNumber = 1;

for (let i = 0; i < 165; i++) {
  const square = document.createElement("div");
  square.className = "square";

  let iconName = "default-icon.png";
  let displayIcon = true;

  if ([0, 17, 18, 29, 78, 123].includes(i)) {
    iconName = "icon1.png";
  } else if ([1].includes(i)) {
    iconName = "icon2.png";
  } else if ([3, 33, 154].includes(i)) {
    iconName = "icon3.png";
  } else if ([11, 121].includes(i)) {
    iconName = "icon4.png";
  } else if ([12, 59, 83, 95, 97, 105, 110, 113, 144].includes(i)) {
    iconName = "icon5.png";
  } else if (
    [14, 34, 36, 56, 71, 82, 90, 92, 115, 118, 134, 155, 161].includes(i)
  ) {
    iconName = "icon6.png";
  } else if ([15].includes(i)) {
    iconName = "icon7.png";
  } else if ([16, 39, 44, 47, 49, 61, 66, 96, 99, 107, 122, 157].includes(i)) {
    iconName = "icon8.png";
  } else if ([22].includes(i)) {
    iconName = "icon9.png";
  } else if ([23, 89, 108, 133, 143, 160].includes(i)) {
    iconName = "icon10.png";
  } else if ([25, 55, 67, 101, 104, 117, 132, 159].includes(i)) {
    iconName = "icon11.png";
  } else if ([26, 28, 30, 40, 84].includes(i)) {
    iconName = "icon12.png";
  } else if ([27, 37, 38, 48, 60, 88, 94, 106, 112, 146].includes(i)) {
    iconName = "icon13.png";
  } else if ([45].includes(i)) {
    iconName = "icon14.png";
  } else if ([58, 93, 103, 111, 116, 135].includes(i)) {
    iconName = "icon15.png";
  } else if ([62, 98, 119, 145, 156].includes(i)) {
    iconName = "icon16.png";
  } else if ([69, 80].includes(i)) {
    iconName = "icon17.png";
  } else if ([70, 81, 100].includes(i)) {
    iconName = "icon18.png";
  } else if ([77].includes(i)) {
    iconName = "icon19.png";
  } else if ([124].includes(i)) {
    iconName = "icon20.png";
  } else {
    displayIcon = false;
  }

  if (displayIcon) {
    const icon = createIcon("icon", iconName, false);
    square.appendChild(icon);
  }

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

  if (
    i == 2 ||
    i == 13 ||
    i == 24 ||
    i == 35 ||
    i == 46 ||
    i == 57 ||
    i == 68 ||
    i == 79 ||
    i == 91 ||
    i == 102 ||
    i == 114 ||
    i == 125 ||
    i == 136 ||
    i == 147 ||
    i == 158
  ) {
    square.style.backgroundColor = "#6495ED";
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

    if (displayIcon) {
      const icon = createIcon("icon", iconName, false);
      icon.style.position = "absolute";
      e.target.appendChild(icon);
    }

    e.target.style.position = "relative";
    e.target.style.overflow = "hidden";
    e.target.style.textAlign = "right";
  });

  grid.appendChild(square);
}
