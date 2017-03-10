OO model.

Square is a class, with a list of possible values stored as an array of 9 booleans (all true by default, ie possibly the correct value)

Optional value prop passed in at instantiation, in which case all possibles not corresponding to this are set to false.

checkIfValueFound method which checks the possibles array - if only one true remaining, this is set as the value.

Grid: 9 arrays of 9 squares. Each array is a line, and taking line[n] for each line gives column n.

Grid constructor will need to take in starting values for all these, where they exist.
