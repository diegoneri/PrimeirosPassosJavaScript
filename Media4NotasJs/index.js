/**
 * Receba 4 notas, com somente uma casa decimal. 
 * Valide se todas estão entre 0.0 e 10.0. 
 * Se alguma delas não estiver, exiba "Digite somente notas entre 0 e 10.". 
 * Caso todas as notas sejam válidas, calcule a média aritmética das notas. 
 * Exiba uma mensagem no seguinte padrão: 
 * "Você ficou com média 7,5. Resultado: Aprovado".

Resultados possíveis:

"Reprovado" para médias menores que 5.0
"Em recuperação" para médias entre 5.0 e 6.0
"Aprovado", para médias acima de 6.0
Ex.:

-- Média --

Digite as suas notas abaixo.
Nota 1: 5,5
Nota 2: -7,0
Nota 3: 10,5
Nota 4: 9,0

Digite somente notas entre 0 e 10.
ou

-- Média --

Digite as suas notas abaixo.
Nota 1: 5,5
Nota 2: 7,0
Nota 3: 6,5
Nota 4: 9,0

Você ficou com média 7,0. Resultado: Aprovado
ou

-- Média --

Digite as suas notas abaixo.
Nota 1: 4,5
Nota 2: 3,0
Nota 3: 6,5
Nota 4: 2,0

Você ficou com média 4,0. Resultado: Reprovado
ou

-- Média --

Digite as suas notas abaixo.
Nota 1: 5,5
Nota 2: 5,5
Nota 3: 5,5
Nota 4: 5,5

Você ficou com média 5,5. Resultado: Em recuperação
 * 
 */
alert("Digite as suas notas a seguir!");

const notaUm = Number(prompt("Nota 1"));
const notaDois = Number(prompt("Nota 2"));
const notaTres = Number(prompt("Nota 3"));
const notaQuatro = Number(prompt("Nota 4"));

if (Object.is(notaUm, NaN) 
 || Object.is(notaDois, NaN)
 || Object.is(notaTres, NaN) 
 || Object.is(notaQuatro, NaN)){
    alert("Digite apenas números!");
}else if(notaUm < 0 || notaUm > 10 
      || notaDois < 0 || notaDois > 10 
      || notaTres < 0 || notaTres > 10 
      || notaQuatro < 0 || notaQuatro > 10 ){
    alert("Digite números somente entre 0 e 10");
}else{
    ///calculo
    const media = Number((notaUm + notaDois + notaTres + notaQuatro)/4);
    const msgMedia = `Você ficou com média ${media}.`; 
    let resultado;
    if (media < 5){
        resultado = `${msgMedia} Resultado: Reprovado`;
    }else if (media < 6){
        resultado = `${msgMedia} Resultado: Em recuperação`;
    }else{
        resultado = `${msgMedia} Resultado: Aprovado`;
    }
    alert(resultado);
}