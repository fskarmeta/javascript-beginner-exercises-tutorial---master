let guests = prompt('How many people are coming to your wedding?');

function getPrice(x){
    let cost = 0;
    // Your code here
    if (parseInt(x) <= 50) {
        cost = 4000
    }
    if (parseInt(x) <= 100 && parseInt(x) > 50) {
        cost = 10000
    }
    if (parseInt(x) <= 200 && parseInt(x) > 100) {
        cost = 15000
    }
    if (parseInt(x) > 200) {
        cost = 20000
    }
    return cost;
}


let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');