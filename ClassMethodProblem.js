class Disk {
  constructor(diskNum, row, col) {
    this.color = determineColor() //Doesn't work
    this.diskNum = diskNum
    this.row = this.convertRow(row) //Works
    this.col = this.convertCol(col) //Works
    this.width = calculateWidth() //Doesn't Work
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
    this.row = this.convertRow(row)
  }

  setCol(col) {
    this.col = col
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
    console.log(this) //Method never runs, long nothing
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
    return colors[this.diskNum - 1]
  }

  calculateWidth() {
    console.log(this) //Method never runs, long nothing
    return this.sizeInc + this.diskNum * this.sizeInc
  }
}
