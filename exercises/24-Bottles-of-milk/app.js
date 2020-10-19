// Your code here:

function milk() {
    for (let i = 99; i >= 1; i--) {
        let string = ''
        if (i <= 99 && i > 1) {
            string += i + " bottles of milk on the wall, " + i + " bottles of milk. Take one down and pass it around, " + i + " bottles of milk on the wall."
        }
        if (i === 1) {
            string += (i + " bottle of milk on the wall, " + i + " bottle of milk. Take one down and pass it around, no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")
        }
        console.log(string)
    }
}

milk()