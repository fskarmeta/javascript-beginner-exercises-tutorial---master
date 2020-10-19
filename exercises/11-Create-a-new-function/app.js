/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

console.log(generateRandom(0,9))