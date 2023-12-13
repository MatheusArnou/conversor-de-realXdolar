let valorDolar = 4.97;
let valorReal = gerarValorEmReal();
let taxa = 0;
let valorFinal = 0;

function gerarValorEmReal() {
    let valorEscolhido = parseFloat((Math.random() * 1000 + 1).toFixed(2));
    return valorEscolhido;
}

function conversao(valor) {
    resultado = valor / valorDolar;
    return resultado;
}


let valorConvertidio = conversao(valorReal);

function taxacao() {
    if (valorConvertidio >= 100) {
        taxa = valorConvertidio * 0.05;
        valorFinal = valorConvertidio - taxa;
    } else if (valorConvertidio > 500 && valorConvertidio <= 1000) {
        taxa = valorConvertidio * 0.07;
        valorFinal = valorConvertidio - taxa;
    } else {
        valorFinal = valorConvertidio;
    }
    return valorFinal;
}

console.log(`Você quer converter R$ ${valorReal}, para o dólar americano \n`);
console.log(`A cotação do dólar hoje é de US$ ${valorDolar}\n`);
console.log(`O valor convertido fica em US$ ${valorConvertidio.toFixed(2)}`);
console.log(`Com uma taxa de ${taxa.toFixed(2)}`);
console.log(`Valor final em US$ ${valorFinal.toFixed(2)}`);
