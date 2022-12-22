// Ordenação. Faça uma função que ordene o array de forma crescente, 
// ou seja, do menor para o maior número.
// Esse desafio foi dado em um code challenge para entrevista de emprego! :)

let exampleArray = [573, 105, 13, 10, 52];

function sort(array) {
    let resultArray = array;
    let repeat = true;
    while (repeat) {
        repeat = false;
        for (let i = 0; i <= array.length - 1; i++) {
            if (array[i + 1] < array[i]) {
                let memo = array[i];
                array[i] = array[i + 1];
                array[i + 1] = memo;
                repeat = true;
            }
        }
    }
    return resultArray;
}

console.log("Resultado:");
console.log(sort(exampleArray));
console.log("-----");

// ________________________ TEST ________________________
console.log('TESTS:')
function compareArrays(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}
if (compareArrays(sort(exampleArray), exampleArray.sort())) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________