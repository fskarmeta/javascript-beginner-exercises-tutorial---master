function getColor(x)
{
	//make sure parameter is a number and not a string by converting the value to int:
	
	switch(x){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(y){
	
	for (let i = 0; i < y; i++) {
    
    console.log(getColor(Math.floor(Math.random() * 4) +1))
}
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);

