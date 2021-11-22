// Code your solutions in this file
function writeCards(names, gift){
    let thankYous = []
    for(let i = 0; i <names.length; i++ ) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`)
    }
    return thankYous
}

function countDown(num){
    while (num > 0) {
        console.log(num)
        num -=1
    }
    console.log( num)
}