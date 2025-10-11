document.addEventListener('DOMContentLoaded', () => { // Aguarda o carregamento completo da página

    const frm = document.querySelector("#inform"); // Captura o elemento do formulário
    const botoesOpcao = document.querySelectorAll(".botao-opcao"); // Captura todos os botões de descarte

    let descarteEscolhido = ''; // Cria variável para guardar a opção escolhida

    botoesOpcao.forEach(botao => { // Percorre cada um dos botões
        botao.addEventListener('click', () => { // Adiciona o evento de clique a cada botão
            botoesOpcao.forEach(btn => btn.classList.remove('selecionado')); // Remove a seleção dos outros botões

            botao.classList.add('selecionado'); // Adiciona a seleção ao botão clicado
            
            descarteEscolhido = botao.dataset.valor; // Salva o valor do botão na variável
        });
    });

    if (frm) { // Verifica se o formulário foi encontrado na página
        frm.addEventListener('submit', (event) => { // Adiciona o evento de envio ao formulário
            event.preventDefault(); // Impede o comportamento padrão de recarregar a página

            if (descarteEscolhido === 'Eletronico') { // Verifica se a escolha foi 'Eletronico'
                window.location.href = 'HTML-TELA7-1.html'; // Redireciona para a página específica de eletrônicos
            } else { // Executa para qualquer outra opção de descarte
                const dadosDoFormulario = { // Coleta todas as informações dos campos
                    nome: document.getElementById('nome').value,
                    telefone: document.getElementById('telefone').value,
                    email: document.getElementById('email').value,
                    endereco: document.getElementById('endereco').value,
                    observacoes: document.getElementById('obs').value,
                    tipoDescarte: descarteEscolhido
                };

                localStorage.setItem('dadosDescarte', JSON.stringify(dadosDoFormulario)); // Salva os dados no armazenamento do navegador

                window.location.href = 'HTML-TELA3-1.html'; // Redireciona para a página de confirmação padrão
            }
        });
    } else { // Executa caso o formulário não seja encontrado
        console.error("Erro: O elemento do formulário com id '#inform' não foi encontrado."); // Exibe um erro no console
    }
});