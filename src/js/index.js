/* 

Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondodos no html 

passo 1 - pegar o botão mais no js pra poder verificar quando o usuário clicar em cima dele

passo 2 - indentificar o clique do botão 

passo 3 - adicionar a classe "ativa" nos projetos 

Objetivi - 2 esconder o botão de mostrar mais 

passo - 1 pegar o botão e sconder ele 
*/
//Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondodos no html 

//passo 1 - pegar o botão mais no js pra poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoInativos = document.querySelectorAll('.projeto:not(ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos()
    esconderBotao()
});
function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}
function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}