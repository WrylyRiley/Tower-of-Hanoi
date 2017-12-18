# Tower-of-Hanoi

GA Project 1 - Tower of Hanoi

## Technologies Used

* HTML, CSS, JavaScript
* Brain Grease
* Coffee

## Approach Taken

The setup is based around a combination of classes, objects, and a handful of functions.

The class Disk holds all relevant information about the disk, including color, row number, column number, calculated width, and disc number. The disc number is used to calculate whether disks can be placed on top of each other. The color is determined by an array of pretty colors I preselected on [Commuter Creative](http://www.colors.commutercreative.com/grid/), a site I recommend for color ideas.

The script itself is a pseudo MVC, with a collection of functions that update row/column assignments and handle placement logic, and a collection of functions that update disc positions on-screen, and other visual elements.

This combination of approaches lead to a pretty slimmed down version of what I was expecting it to be. It can always be optimized, but this Minimum Viable Product works and that's what counts.

### Installation Instructions

None to speak of. Simply load index.html and the game will run just fine.

### Unsolved problems

The game Tower of Hanoi is used pedagogically to demonstrate the power of recursive algorithms. The general algorithm for solving a game with n-disks is very short, easy to demonstrate, and easier to implement. The goal was to have an animated display of the power of recursion, but due to a very likely lack of proper implementation of a structure such as MVC, and the fact that JS is 100% blocking, the tower just moves to the goal post and indicates that you won.

### Goals

Employ Ember.js or Backbone.js to create a functional MCV and add a timeout selector for the user to both visualize the game being solved, and asjust how quickly it happens.
