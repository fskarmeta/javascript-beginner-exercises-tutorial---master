var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 5));
	return chamberPosition;
};

const fireGun = (spinnerPosition) => {
    if (spinnerPosition === spinChamber()) {
        return "You're dead!";
    } else {
        return "Keep playing!";
    };
}

console.log(fireGun(bulletPosition));