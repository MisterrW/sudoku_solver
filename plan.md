for possible of square

if that possible does not exist for any of the other squares in that unit, then value is that possible

then

for squares of unit

way to detect possibles based on limited choice - ie if five remaining and three can't be 4 or 6, then each of the other two must be 4 or 6


for possible of square

if that possible does not exist for any of the other squares in that unit, then value is that possible

misc:

columns(grid){
  for(var r = 0; r < grid.grid.length; r++){
    for(var c = 0; c < grid.grid.length; c++) {
      var checking = grid.grid[r][c]

      if(checking.value){
        for(var r2 = 0; r2 < grid.grid.length; r2++) {
          if (! grid.grid[r2][c].value) {
            grid.grid[r2][c].markOff(checking.value)
          }
        }
      }

    }
  }

}
