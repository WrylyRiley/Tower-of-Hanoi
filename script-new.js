// Disk Class
class Disk {
  constructor(diskNum, row, col) {
    this.color = this.determineColor()
    this.diskNum = diskNum
    this.row = convertRow(row)
    this.col = convertCol(col)
    this.width = this.calculateWidth()
    this.sizeInc = 5.666666
  }

  calculatePosition() {
    return `${this.row} / ${this.col} / span 1 / span 1`
    //As a reminder, grid-area is shorthand, so you can call any one of it's constituent properties (e.g. grid-row-start), and get one of these numbers back
  }

  adjustRow(row) {
    // used for hovering
    this.row = this.row + row
  }

  adjustCol(col) {
    // shouldn't relaly be needed
    this.col = this.col + col
  }

  setRow(row) {
    this.row = convertRow(row)
  }

  setCol(col) {
    this.col = convertCol(col)
  }
  convertRow(row) {
    // Top of gameboard is row 6
    // Bottom of gameoard is row 20
    // To make it simple, we'll number rows 1 as the top, and row 15 as the botom
    return 21 - row
  }

  convertCol(col) {
    // leftmost column is 3
    // rightm ost column is 5
    return col + 2
  }
  determineColor() {
    var colors = [
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
    ]
    return colors[this.diskNum]
  }

  calculateWidth() {
    return this.sizeInc + this.diskNum * this.sizeInc
  }
}
// End Disk Class

// Game Variables

var gameVars = {
  minDisks: 3,
  numDisks: 5,
  maxDisks: 15,
  diskHovering: false,
  diskHoveringWhere: null
}

var disks = {
  // Names like this to avoid doing more unnecessary math when figuring out column that disc sits i
  "tower-3": [],
  "tower-4": [],
  "tower-5": []
}

// End Game Variables

// MODEL CONTROLLER //

function initialGenerateDiscs() {
  let row = 1,
    col = 1
  // Loop through in reverse order to stack properly
  for (let i = gameVars.numDisks; i > 0; i--) {
    // Instantiate new disc, store to disks object
    disks[`disk-${i}`] = new Disk(i, row, col)
    // store this new disk in a variable for use in this loop
    let newDisc = disks[`disk${i}`]
    // Increment row
    row++
    // create new div
    let newDiv = $("<div></div>")
    // set ID for later usage
    newDiv.attr("id", `disk-${newDisc.diskNum}`)
    // Append blank div to game-container
    newDiv.appendTo($(".game-container"))
    // Push new disc's number to array for later validation. They're pushed in opposite order so popping will always return the top disc
    gameVars[`tower-${newDisc.col}`].push(newDisc)
    // Modify new div's CSS to get it to show up in the correct place
    newDiv.css({
      "background-color": newDisc.color,
      height: "95%",
      width: `${newDisc.width}%`,
      "grid-area": newDisc.calculatePosition(),
      "justify-self": "center",
      "align-self": "end",
      "z-index": 3,
      border: "1px solid black",
      "border-radius": "10px"
    })
  }
}
// Generate boxes with event listeners to wait for click events
function generateEventListeners() {
  for (let i = 3; i < 6; i++) {
    // create new tower listener. Just a blank div
    newTower = $("<div></div>", {
      id: `tower-${i}`
    })
    // add div to gameboard
    $(".game-container").append(currentTower)
    // attach event listener
    newTower.on("click", function() {
      diskHover($(this).attr("id"))
    })
    // Change CSS to make it fit the proper dimensions
    currentTower.css({
      "grid-row": "5 / span 16",
      // Applies to columns 3, 4, and 5
      "grid-column": `${i + 3} / span 1`,
      height: "100%",
      width: "95%",
      "justify-self": "center",
      "background-color": "rgba(50, 50, 200, 0.2)",
      // make sure it's on top of everything else
      "z-index": "10"
    })
  }
}

function diskHover(towerID) {
  // grabs top-most disks from tower array
  // logic check for origin tower or destination tower
  if (gameVars.diskHoveringWhere) {
    // there is an origin tower, and this run will be to place the disc in a new place
    var topDisc =
      disks[gameVars.diskHoveringWhere][gameVars.diskHoveringWhere.length - 1]
  } else {
    // there is no origin tower, yet
    var topDisc = disks[towerID][towerID.length - 1]
  }

  // checks if a disk is already hovering
  // checks if the clicked tower has any disks
  if (!gameVars.diskHovering && disks[towerID]) {
    // flags for a hovering disc
    gameVars.diskHovering = true
    // sets origin tower of newly hovering disk
    gameVars.diskHoveringWhere = towerID
    // changes discs row number to row-1
    topDisc.adjustRow(-1)
    updateView()
  } else if (gameVars.diskHovering) {
    if (towerID === gameVars.diskHoveringWhere) {
      // Condition where origin tower equals destinaton tower
      // remove hovering flag
      gameVars.diskIsHovering = false
      // lowers disk
      topDisc.adjustRow(1)
    } else {
      // origin and destination are different
      // if destination tower is empty, just place it
      if (!disks[towerID]) {
        // swap discs using tower origin ID, and tower destination ID
        swapDiscs(topDisc, towerID, gameVars[diskHoveringWhere])
      } else {
        if (checkDiscSize(topDisc, towerID)) {
          swapDiscs(topDisc, towerID, gameVars[diskHoveringWhere])
        }
      }
    }
  }
}

function swapDiscs(topDisc, towerOrigin, towerDestination) {
  disks[towerOrigin].pop()
  disks[towerDestination].push(topDisc)
}
function checkDiscSize(topDisc, towerID) {
  //if passed disk's number is less than that of the destination tower's top-most disc's number, return true
  if (topDisc.diskNum < disks[towerID][towerID.length - 1].diskNum) {
    return true
  }
  return false
}
// END MODEL CONTROLLER //

// VIEW CONTROLLER //
// Updates all discs at once acounting for all changes that may occur during gameplay. Heavy overhead, especially for a large number of discs, but I've capped this game at 15, so it shouldn't be a problem
function updateView() {
  for (let i = 3; i < 6; i++) {
    let tower = `tower-${i}`
    for (let j = 0; j < tower.length; j++) {
      let disk = tower[j].diskNum
      $(`#disk-${disk.diskNum}`).css("grid-area", `${disk.calculatePosition}`)
    }
  }
}

// END VIEW CONTROLLER //
