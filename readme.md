Sudoku solver.

I'm trying to do this just by describing in code the haphazard ways I solve sudokus. So it probably won't seem particularly logical...

TODO

something to scrape rendered HTML puzzles into format so I don't have to type any more
More complex checks:
take into account constrained possiblities in other squares, not just final values - this will need to apply both
--within current (ie row) and
--across types (ie row aware of constraints across intersecting column)

DONE

Checks: column, row, 3x3 grid. Each one takes a square, and if it has a value, assigns that value to false in all the other squares in the currently evaluating section (be it column, row etc)

Optional value prop passed in at instantiation, in which case all possibles not corresponding to this are set to false. Grid constructor will need to take in starting values for all these, where they exist.

checkIfValueFound method which checks the possibles array - if only one true remaining, this is set as the value.

Grid: 9 arrays of 9 squares. Each array is a line, and taking line[n] for each line gives column n.

Square is a class, with a list of possible values stored as an array of 9 booleans (all true by default, ie all possibly the correct value)

OO model.
