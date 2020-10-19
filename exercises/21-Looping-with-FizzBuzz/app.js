function fizzBuzz(x) {
    for (let i = 1; i <= x; i++) {
        let string = ''
        if (i % 3 === 0) {
            string += 'Fizz'
        }
        if (i % 5 === 0) {
            string += 'Buzz'
        }
        console.log(string || i)
    }
}

fizzBuzz(100);