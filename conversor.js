const valorDolar = 4.97;

function gerarValorEmReal() {
    return parseFloat((Math.random() * 1000 + 1).toFixed(2));
}

function conversao(valor) {
    return valor / valorDolar;
}

function taxacao(valorConvertido) {
    let taxa;
    if (valorConvertido >= 100) {
        taxa = valorConvertido * 0.05;
    } else if (valorConvertido > 500 && valorConvertido <= 1000) {
        taxa = valorConvertido * 0.07;
    } else if (valorConvertido > 1000) {
        taxa = valorConvertido * 0.10;
    } else {
        taxa = 0;
    }
    const valorFinal = valorConvertido - taxa;
    return { valorFinal, taxa };
}

let valorReal = gerarValorEmReal();
let valorConvertido = conversao(valorReal);
let { valorFinal, taxa } = taxacao(valorConvertido);

console.log(`Valor em Reais: ${valorReal}`);
console.log(`Valor Convertido: ${valorConvertido}`);
console.log(`Valor da taxa: ${taxa}`);
console.log(`Valor final após Taxação: ${valorFinal}`);
