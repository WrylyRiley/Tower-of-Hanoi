//function to create default number of disks and add click listeners
// start game

var gameVars = {
  diskIsHovering: false,
  towerOrigin: null,
  towerDestination: null,
  moveCounter: 0,
  sameTower: false
}

var disks = {
  maxDisks: 15,
  minDisks: 3,
  numDisks: 5,
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
  "tower-1": [],
  "tower-2": [],
  "tower-3": []
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
    generateDisk(i, i - 1, gridRow, gridColumn)
  }
  generateEventListeners()
}

function resetGame() {
  gameVars.moveCounter = 0
}

function generateDisk(diskNum, colorNum, gridRow, gridColumn) {
  // Create new disk
  let currentDisk = $("<div></div>", {
    class: "disk",
    id: `disk-${diskNum}`,
    "data-towerNum": "Tower1"
  })
  // push disk numbers to array.
  towers["tower-1"].push(`${diskNum}`)
  // Chaining CSS in jQuery, use JSON object: https://stackoverflow.com/questions/5094788/jquery-chaining

  $(".game-container").append(currentDisk)

  currentDisk.css({
    //
    "background-color": disks.colors[colorNum],
    height: "95%",
    width: disks.widths[diskNum] + "%",
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
  diskIncrement = 5.66666666
  for (let i = 15; i > 0; i--) {
    disks.widths[i] = diskIncrement + diskIncrement * i
  }
}

function diskHover(tower) {
  let workingTower = towers[tower]
  let discNum = workingTower.length - 1
  //tower format: tower-#
  // let towerNumber = tower.substr(tower.length-1, tower.length)
  if (towers[tower]) {
    if (gameVars.diskIsHovering && disks.sameTower) {
      sameTower = false
      gameVars.diskIsHovering = false
      $(`#disc-${discNum}`).css({
        "margin-bottom": "0px"
      })
      return
    }
    //change css on selected div and make it hover
    gameVars.diskIsHovering = true
    $(`#disc-${discNum}`).css({
      "margin-bottom": "20px"
    })
  } else {
    return
  }
}

function placeDisc() {
  gameVars.moveCounter += 1
  if (gameVars.towerOrigin === gameVars.towerDestination) {
  }
}

function generateEventListeners() {
  for (let i = 0; i < 3; i++) {
    currentTower = $("<div></div>", {
      id: `tower-${i + 1}`,
      class: "towerListener"
    })

    currentTower.on("click", function() {
      if (disks.diskIsHovering) {
        gameVars.towerDestination = $(this).attr("id")
        placeDisc()
      } else {
        gameVars.towerOrigin = $(this).attr("id")
        diskHover(gameVars.towerOrigin)
      }
    })

    $(".game-container").append(currentTower)

    currentTower.css({
      "grid-row": "5 / span 16",
      // Applies to columns 3, 4, and 5
      "grid-column": `${i + 3} / span 1`,
      height: "100%",
      width: "95%",
      "justify-self": "center",
      "background-color": "rgba(50, 50, 200, 0.2)",
      "z-index": "10"
    })
  }
}

// second: need to populate tower 1 with 5 disks (default). for loop, evelis, etc.

// third: need to interact with disks somehow

// draw the rest of the owl

function winConditionCheck() {}
