

function perfectSquare (n) {
    let num = Math.sqrt(n) + 1;

    console.log(num);
    let perfectSq = num * num;    
    return perfectSq
}

console.log(perfectSquare(9)); // should return 16 (3x3=9, 4x4=16)
console.log(perfectSquare(289)); // should return 324 (17x17=289 18x18=324)
console.log(perfectSquare(3000)); // should return -1 (sq root of 3000 is 54.77)