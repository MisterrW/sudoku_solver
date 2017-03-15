##The problem:

sometimes it is possible to exclude number n in a square s in a row or column r/c, because in a 3X3 which r/c intersects, which does not contain s, the only squares where value can equal n lie in r/c

The same is true of 3x3s - sometimes, 2 or 3 squares in a 3x3 in a line are known to have certain values due to the row/column - so can exclude these values in the rest of the 3x3

Breaking it down:

Every r/c passes through three 3x3s

Exclude the 3x3 which s is in

Leaves two 3x3s which may have values definitely in r/c

##pseudocode to get relevant 3x3s



##pseudocode for row:

for(row-r-intersecting 3x3 not including s){
	for(remaining possibility in s){
		possibilityCanBeExcluded = false
		
//first check that this value does actually appear in the y-axis of r
		for(square of 3x3){
			if(square y-axis === r y-axis){
				if(square's possibilities include remaining possibility in s){
					possibilityCanBeExcluded = true
				}
			}
//then check that it does not appear in the 3x3 outside of the y-axis of r
		if(possibilityCanBeExcluded === true){
			for(square of 3x3){
				if(! square y-axis === r y-axis){
					if(square's possibilities include remaining possibility in s){
						possibilityCanBeExcluded = false
					}
				}
			}
//at this point, if possibilityCanBeExcluded is true, it means that value appears in one other 3x3 only in the plane of r, and can therefore definitely be excluded. Mark it off.
			if(possibilityCanBeExcluded === true){
				s.markOffPossibility(remaining possibility in s)
			}
		}
		
	}
}