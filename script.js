let gridSize = 16;

const TitleOfGame = document.createElement("div");
TitleOfGame.textContent = "Etch-a-Sketch";
TitleOfGame.classList.add("title");
document.body.appendChild(TitleOfGame);

const theWholeGrid = document.createElement("div");
theWholeGrid.classList.add("theWholeGrid");
document.body.appendChild(theWholeGrid);

const grid = document.createElement("div");
grid.classList.add("grid");
theWholeGrid.appendChild(grid);

const buttons = document.createElement("div");
buttons.classList.add("buttons");
theWholeGrid.appendChild(buttons);

const GridChangeButton = document.createElement("button");
GridChangeButton.classList.add("changeGridButton");
GridChangeButton.textContent = "Change Grid";
buttons.appendChild(GridChangeButton);

const AllowOneColorButton = document.createElement("button");
AllowOneColorButton.classList.add("changeGridButton");
AllowOneColorButton.textContent = "One Color";
buttons.appendChild(AllowOneColorButton);

const RandomColorButton = document.createElement("button");
RandomColorButton.classList.add("changeGridButton");
RandomColorButton.textContent = "Random Colors";
buttons.appendChild(RandomColorButton);

AllowOneColorButton.addEventListener("click", function () {
  allowRandomColors = false;
  grid.textContent = "";
  SetGrid();
  boxColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
  changeGridButtons();

  this.style.background = "green";
});

RandomColorButton.addEventListener("click", function () {
  allowRandomColors = true;
  grid.textContent = "";
  SetGrid();
  changeGridButtons();
  this.style.background = "green";
});

let boxColor;
let allowRandomColors = true;

SetGrid();
function SetGrid() {
  let IndexOfGrid = [];
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row-class");
    grid.appendChild(row);
    for (let y = 0; y < gridSize; y++) {
      const box = document.createElement("div");
      const width = 100 / gridSize;
      box.style.width = `${width}%`;
      box.classList.add("box");
      row.appendChild(box);
      IndexOfGrid.push(1);
    }
  }
  const boxes = document.querySelectorAll(".box");
  // console.log(boxes);
  boxes.forEach((e, index) => {
    e.addEventListener("mouseenter", () => {
      IndexOfGrid[index] =
        IndexOfGrid[index] > 0 && setRandomColor
          ? Math.floor(IndexOfGrid[index] * 10 - 1) / 10
          : 0;
      console.log(IndexOfGrid[index]);
      e.style.background = allowRandomColors
        ? setRandomColor(IndexOfGrid[index])
        : boxColor;
      console.log(boxColor);
    });
  });
}

function setRandomColor(opacity) {
  const x = Math.floor(Math.random() * 255);
  const y = Math.floor(Math.random() * 255);
  const z = Math.floor(Math.random() * 255);

  const Color = `rgb(${x * opacity}, ${y * opacity}, ${z * opacity})`;
  return Color;
}
// function setColor(opacity) {

// }
GridChange();
function GridChange() {
  GridChangeButton.addEventListener("click", function () {
    let input1 = prompt("enter the number of Grids you wish ");
    if (!input1) {
      return;
    }
    gridSize = Number(input1);
    console.log(gridSize + "is the best");
    if (isNaN(gridSize) || gridSize <= 0 || gridSize >= 100) {
      for (;;) {
        let input2 = prompt(
          "The number you entered is wrong please enter valid number"
        );
        if (!input2) {
          return;
        }
        gridSize = Number(input2);
        console.log(gridSize + "is the second");
        if (gridSize <= 100 && gridSize > 0) break;
      }
    }
    grid.textContent = "";
    SetGrid();
  });
}

function changeGridButtons() {
  const ChangeGridButtons = document.querySelectorAll(".changeGridButton");
  ChangeGridButtons.forEach((btn) => {
    btn.style.background = "";
  });
}
