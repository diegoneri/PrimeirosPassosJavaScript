/**
 * Receba o nome e o sobrenome do usuário separadamente. 
 * Exiba o nome completo no formato padrão Nome Sobrenome e no formato de catálogo SOBRENOME, Nome.
 * Exemplo:

    Digite seu primeiro nome: Ermogenes
    Digite seu sobrenome: Palacio

    Nome completo: Ermogenes Palacio
    Nome de catálogo: PALACIO, Ermogenes
 * 
 */

//

const nome = prompt("Digite seu primeiro nome");
const sobrenome = prompt("Digite seu sobrenome");

const nomeCompleto = `${nome} ${sobrenome}`;
const nomeCatalogo = `${sobrenome.toUpperCase()}, ${nome}`;

alert(`Nome completo: ${nomeCompleto}`);
alert(`Nome de catálogo: ${nomeCatalogo}`);