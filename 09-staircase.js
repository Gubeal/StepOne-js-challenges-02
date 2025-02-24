// Escada. Nesse desafio você vai ter que desenhar uma escada. 
// Para isso escreva uma função chamada ‘staircase’ que recebe como parâmetro um 
// número inteiro 'n', que indica quantos degraus essa escada vai ter. 
// A base e a altura devem ser igual a 'n', o desenho deve ser feito usando # e espaços.

// DICA: você pode usar o método de string repeat(). Dê uma pesquisada sobre ;)

// Esse desafio foi dado em um code challenge para entrevista de emprego! :)

// Exemplo:

// quando 
// n= 6;

// output deve ser:
//      #
//     ##
//    ###
//   ####
//  #####
// ######

function staircase(n) {
	let line = '';
	for (let row = n - 1; row >= 0; row--) {
		for (let column = 0; column <= n; column++) {
			if (column > row) {
				line += '#';
			} else {
				line += ' ';
			}
		}
		console.log(line);
		line = '';
	}
}



// ________________________ TEST ________________________
console.log('TESTS:')
console.log('escada com n=5')
staircase(5);
// ________________________ TEST ________________________