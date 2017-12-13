// Disk Class
class Disk {
  constructor(color, diskNum, row, col, width) {
    this.color = this.determineColor()
    this.diskNum = diskNum
    this.row = convertRow(row)
    this.col = converCol(col)
    this.width = this.calculateWidth()
    this.sizeInc = 5.666666
  }

  calculatePosition() {
    return `"grid-area": ${this.row} / ${this.col} / span 1 / span 1`
    //As a reminder, grid-area is shorthand, so you can call any one of it's constituent properties (e.g. grid-row-start), and get one of these numbers back
  }

  convertRow(row){
    // Top of gameboard is row 6 in CSS
    // Bottom of gameoard is row 20
    // To make it simple, we'll number rows 1 as the top, and row 15 as the botom

    return 
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
  minDisks = 3,
  numDisks = 5,
  maxDisks = 15
}
function initialGenerateDiscs() {
  let rowStart = 
  // Loop through in reverse order to stack properly
  for (let i = gameVars.numDisks; i > 0; i--){
    
  }
}
