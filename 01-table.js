// Faça uma função chamada table que tem como parâmetro de entrada um número 
// e devolve a tabuada desse mesmo número do valor 1 a 10. 
// Um exemplo de saída para a tabuada do 6 seria:

// "The table of 6 is:"
// "1 x 6 = 6";
// "2 x 6 = 12";
// "3 x 6 = 18";
// "4 x 6 = 24";
// "5 x 6 = 30";
// "6 x 6 = 36";
// "7 x 6 = 42";
// "8 x 6 = 48";
// "9 x 6 = 54";
// "10 x 6 = 60";

function table(number, limit) {
    if (limit) {
        console.log(`The table of ${number} is, by 1 until ${limit}:`);
        for (i = 1; i <= limit; i++) {
            console.log(`${i} x ${number} = ${i * number}`);
        }
    } else {
        console.log(`The table of ${number} is:`);
        for (i = 1; i <= 10; i++) {
            console.log(`${i} x ${number} = ${i * number}`);
        }
    }
}

table(2);

// Bônus:
// Agora coloque mais um parâmetro na função: ao invés da tabuada ir de 1 a 10, 
// agora ela pode ir de 1 até x.

table(2, 5);
