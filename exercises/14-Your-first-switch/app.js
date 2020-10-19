function getColor(selection)
{
	switch(selection){
		case 'red':
        case 'green':
        case 'blue':
            return true;
	    default:
            return false;             
	}
}

var colorname = window.prompt('What color do you want?');
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
