// O menor número. Crie uma função que recebe um array de números como parâmetro 
// de entrada e retorna o menor número do array.

const exampleArray = [-2, 0, 5, 9, 120, -60];

function smallestNumber(array) {
    let smallNumber;
    for (i = 0; i <= array.length; i++) {
        if (i == 0) {
            smallNumber = array[i];
        } else if (array[i] < smallNumber) {
            smallNumber = array[i];
        }
    }
    return smallNumber;
}



// ________________________ TEST ________________________
console.log('TESTS:')
if (smallestNumber(exampleArray) == -60) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________