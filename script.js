//function to create default number of discs and add click listeners
// start game
populateGame()


var gameVars = {
  discIsHovering: false,
  towerOrigin: null,
  towerDestination: null;
}

var discs = {
  maxDiscs: 15,
  minDiscs: 3,
  numDiscs: 5,
  discHeight: 30,
  towerHeight: function() {
    return this.discHeight * (this.numDiscs + 2)
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
  ]
}

var towers = {
  one: [],
  two: [],
  three: []
}

// first: need to populate grid with towers
// towers height will be a function of the number of discs. If we say each disc is 15px tall, multiply that by numOfDiscs

function populateGame() {
  let multiplier = 1 / discs.numDiscs
  let currentMultiplier = 0
  $(".tower").css("height", `${discs.towerHeight()}px`)

  for (let i = 0; i < discs.numDiscs; i++) {
    //add discs and give them an attribute to show "weight"
    $("#discContainerOne").append(
      `<div class="disc" data-weight=${i + 1} data-tower="1"></div>`
    )
    towers.one.push(`${i + 1}`)
    this.on(
      "click",
      discHover(this.attr("data-weight"), this.attr("data-tower"))
    )
  }
}

function resetGame() {}

function generateDiscs() {}

function discHover(weight, tower) {
  //check if disc is top disc. return empty if not
  gameVars.discIsHovering = true
  //change css on selected div and make it hover

}

// second: need to populate tower 1 with 5 discs (default). for loop, evelis, etc.

// third: need to interact with discs somehow

// draw the rest of the owl
