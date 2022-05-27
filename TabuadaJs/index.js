/**
 * Receba um número. Exiba sua tabuada.

    Ex.:

    Tabuada do número: 7

    7 x 0 = 0
    7 x 1 = 7
    7 x 2 = 14
    7 x 3 = 21
    7 x 4 = 28
    7 x 5 = 35
    7 x 6 = 42
    7 x 7 = 49
    7 x 8 = 56
    7 x 9 = 63
    7 x 10 = 70
 * 
 */

const numero = Number(prompt('Digite um número para a sua tabuada', '0'));

if (Object.is(numero, NaN)){
    alert("Digite somente números");
}else{
    let resultado = `Tabuada do ${numero}: \n`;
    for (let i = 0; i <= 10; i++){
        resultado = `${resultado}\n${numero} x ${i} = ${numero * i}`;
    }
    alert(resultado);
}