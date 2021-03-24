function numberToPower(number, power){
    var total = 1;
    for (var i = 1; i <= power; i++) {
        total = total * number;
    }
    return total;
}

function numberToPower(number, power){
    let total = 1;
    for (let i = 1; i <= power; i++) {
        total = total * number;
    }
    return total;
}

//2 variant
//https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript