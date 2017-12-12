//function to create default number of disks and add click listeners
// start game

var gameVars = {
  diskIsHovering: false,
  towerOrigin: null,
  towerDestination: null
}

var disks = {
  maxDisks: 16,
  minDisks: 3,
  numDisks: 5,
  diskHeight: 30,
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
  widths: [],
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
  one: [],
  two: [],
  three: []
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
  for (let i = 0; i < disks.numDisks; i++) {
    gridRow -= 1
    //add disks and give them an attribute to show "weight"
    generateDisk(i + 1, disks.widths[i], gridRow, gridColumn)
  }
}

function resetGame() {}

function generateDisk(diskNum, newWidth, gridRow, gridColumn) {
  // Create new disk
  let currentDisk = $("<div></div>", {
    class: "disk",
    "data-weight": `${diskNum}`,
    "data-tower": "1"
  })
  // Unshift disk number to array. Maybe I'll use this for tracking
  towers.one.unshift(`${diskNum}`)
  // Add event listener
  currentDisk.on(
    "click",
    diskHover($(this).attr("data-weight"), $(this).attr("data-tower"))
  )
  // Chaining CSS in jQuery, use JSON object: https://stackoverflow.com/questions/5094788/jquery-chaining

  $(".game-container").append(currentDisk)

  currentDisk.css({
    "background-color": disks.colors[diskNum],
    height: "100%",
    width: newWidth + "%",
    "grid-row": `${gridRow} / span 1`,
    "grid-column": `${gridColumn} / span 1`,
    "justify-self": "center",
    "align-self": "end",
    "z-index": 3,
    border: "1px solid black"
  })
}

function generateWidths() {
  diskIncrement = 5.625
  for (let i = 0; i < disks.numDisks; i++) {
    disks.widths.push(95.625 - diskIncrement * i)
  }
}

function diskHover(weight, tower) {
  //check if disk is top disk. return empty if not
  gameVars.diskIsHovering = true
  //change css on selected div and make it hover
}

// second: need to populate tower 1 with 5 disks (default). for loop, evelis, etc.

// third: need to interact with disks somehow

// draw the rest of the owl
