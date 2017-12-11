//function to create default number of discs and add click listeners

var discs = {
  maxDiscs: 15,
  minDiscs: 3,
  numDiscs: 5,
  towerHeight: function() {
    return 10 + 15 * numDiscs
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

function populateGame() {
  $(".tower").css("height", `${discs.towerHeight()}px`)
  for (let i = 0; i < numDiscs; i++) {}
}
// first: need to populate grid with towers
// towers height will be a function of the number of discs. If we say each disc is 15px tall, multiply that by numOfDiscs

// second: need to populate tower 1 with 5 discs (default). for loop, evelis, etc.

// third: need to interact with discs somehow
