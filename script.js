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
  one: [],
  two: [],
  three: []
}

// first: need to populate grid with towers
// towers height will be a function of the number of disks. If we say each disk is 15px tall, multiply that by numOfDisks

populateGame()

function populateGame() {
  generateWidths()
  $(".tower").css("height", `${disks.towerHeight()}px`)
  for (let i = 0; i < disks.numDisks; i++) {
    //add disks and give them an attribute to show "weight"
    generateDisks(i + 1, disks.widths[i])
  }
}

function resetGame() {}

function generateDisks(diskNum, newWidth) {
  let currentDisk = $("#diskContainerOne").append(
    `<div class="disk" data-weight=${diskNum} data-tower="1"></div>`
  )
  towers.one.unshift(`${diskNum}`)
  currentDisk.on(
    "click",
    diskHover(currentDisk.attr("data-weight"), currentDisk.attr("data-tower"))
  )
  // Chaining CSS in jQuery, use JSON object: https://stackoverflow.com/questions/5094788/jquery-chaining
  currentDisk.css({
    "background-color": disks.colors[diskNum],
    height: "50px",
    width: newWidth + "%",
    "grid-area": `${diskNum + 1} / 1 / ${diskNum} / 2`
  })
}

function generateWidths() {
  diskIncrement = 100 / (disks.numDisks + 5)
  for (let i = 0; i < disks.numDisks; i++) {
    disks.widths.push(98 - diskIncrement * i)
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
