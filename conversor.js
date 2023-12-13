let valorDolar = 4.97;
let valorReal = gerarValorEmReal()

function gerarValorEmReal (){
    let valorEscolhido = parseFloat((Math.random() * 1000 + 1).toFixed(2));
    return valorEscolhido;
}

//
function conversao(){
    resultado = valorReal/ valorDolar;
    return resultado;
}

let valorConvertidio = conversao();

console.log(`Você quer converter R$ ${valorReal}, para o dolar americano \n`);
console.log(`A contação do dolar hoje é de US$ ${valorDolar}\n`);
console.log(`O valor convertido fica em US$ ${valorConvertidio.toFixed(2)}`);
