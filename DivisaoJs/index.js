/***
 * Receba um numerador e um denominador. 
 * Exiba o resultado da divisão ou "Não é possível dividir por zero.", 
 * conforme o caso. Ex.:

    Digite o numerador....: 12
    Digite o denominador..: 3
    12 dividido por 3 é 4.
    ou

    Digite o numerador....: 0
    Digite o denominador..: 5
    0 dividido por 5 é 0.
    ou

    Digite o numerador....: 12
    Digite o denominador..: 0
    Não é possível dividir por zero.
 * 
 */

const numerador = Number(prompt("Digite o numerador"));
const denominador = Number(prompt("Digite o denominador"));

if (Object.is(numerador, NaN) || Object.is(denominador, NaN) ){
    alert("Informe apenas números");
}else if (denominador == 0){
    alert("Não é possível dividir por zero.");
}else{
    const divisao = Number(numerador / denominador);
    alert(`${numerador} dividido por ${denominador} é ${divisao}.`)
}

