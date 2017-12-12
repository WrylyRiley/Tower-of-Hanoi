//function to create default number of disks and add click listeners
// start game

var gameVars = {
  diskIsHovering: false,
  towerOrigin: null,
  towerDestination: null
}

var disks = {
  maxDisks: 15,
  minDisks: 3,
  numDisks: 15,
  diskHeight: 25,
  towerHeight: function() {
    return this.diskHeight * (this.numDisks + 2)
  },
  colors: [
    "seagreen",
    "darkcyan",
    "peachpuff",
    "chocolate",
    "cornflowerblue",
    "darkkhaki",
    "darkslateblue",
    "darkseagreen",
    "green",
    "goldenrod",
    "indianred",
    "lightslategrey",
    "olive",
    "royalblue",
    "saddlebrown"
  ],
  widths: {},
  minimumMoves: function() {
    return Math.pow(2, this.numDisks) - 1
  }
}

var towers = {
  oneStart: 3,
  oneEnd: 4,
  twoStart: 4,
  twoEnd: 5,
  threeStart: 5,
  threeEnd: 6,
  tower1: [],
  tower2: [],
  tower3: []
}

// first: need to populate grid with towers
// towers height will be a function of the number of disks. If we say each disk is 15px tall, multiply that by numOfDisks

populateGame()

function populateGame() {
  // Indicates first tower's column, first available spot
  let gridColumn = 3
  let gridRow = 21
  generateWidths()
  $(".tower").css("height", `${disks.towerHeight()}px`)
  for (let i = disks.numDisks; i > 0; i--) {
    gridRow -= 1
    //add disks and give them an attribute to show "weight"
    generateDisk(i + 1, i - 1, gridRow, gridColumn)
  }
}

function resetGame() {}

function generateDisk(diskNum, colorNum, gridRow, gridColumn) {
  // Create new disk
  let currentDisk = $("<div></div>", {
    class: "disk",
    "data-weight": `${diskNum}`,
    "data-tower": "1"
  })
  // Unshift disk number to array. Maybe I'll use this for tracking
  towers.tower1.unshift(`${diskNum}`)
  // Chaining CSS in jQuery, use JSON object: https://stackoverflow.com/questions/5094788/jquery-chaining

  $(".game-container").append(currentDisk)

  currentDisk.css({
    //
    "background-color": disks.colors[colorNum],
    height: "100%",
    width: disks.widths[diskNum - 1] + "%",
    "grid-row": `${gridRow} / span 1`,
    "grid-column": `${gridColumn} / span 1`,
    "justify-self": "center",
    "align-self": "end",
    "z-index": 3,
    border: "1px solid black",
    "border-radius": "10px"
  })
}

function generateWidths() {
  diskIncrement = 5.625
  for (let i = 15; i > 0; i--) {
    disks.widths[i] = 5.625 + diskIncrement * i
  }
}

function diskHover(clickedTower, tower) {
  if (towers[tower]) {
    gameVars.diskIsHovering = true
  }

  //change css on selected div and make it hover
}

function generateEventListeners() {
  for (let i = 0; i < 3; i++) {
    currentTower = $("<div></div>", { id: `tower${i}`, class: "towerListener" })

    currentTower.on("click", diskHover(this, $(this).attr("id")))

    $(".game-container").append(currentTower)

    currentTower.css({
      height: "100%",
      width: "100%",
      "background-color": "rgbs(0, 0, 0, 0)",
      "grid-row": "5 / span 16",
      // Applies to columns 3, 4, and 5
      "grid-column": `${i + 3} / span 1`,
      "z-index": "10"
    })
  }
}

// second: need to populate tower 1 with 5 disks (default). for loop, evelis, etc.

// third: need to interact with disks somehow

// draw the rest of the owl
