// Espera o conteúdo da página carregar para garantir que todos os elementos existem
document.addEventListener('DOMContentLoaded', () => {

    // CORREÇÃO AQUI: Agora seleciona o formulário com o ID correto "#inform"
    const frm = document.querySelector("#inform");

    // Seleciona todos os botões que têm a classe ".botao-opcao"
    const botoesOpcao = document.querySelectorAll(".botao-opcao");

    // Variável para guardar qual descarte foi selecionado
    let descarteEscolhido = '';

    // --- LÓGICA PARA SELECIONAR O TIPO DE DESCARTE ---
    botoesOpcao.forEach(botao => {
        // Adiciona um "ouvinte" de clique para cada botão de opção
        botao.addEventListener('click', () => {
            // Primeiro, remove a classe 'selecionado' de TODOS os outros botões
            botoesOpcao.forEach(btn => btn.classList.remove('selecionado'));

            // Depois, adiciona a classe 'selecionado' APENAS no botão que foi clicado
            botao.classList.add('selecionado');
            
            // Guarda o valor do atributo 'data-valor' do botão na nossa variável
            descarteEscolhido = botao.dataset.valor;
        });
    });

    // --- LÓGICA PARA ENVIAR O FORMULÁRIO ---
    // Apenas adicione o "ouvinte" se o formulário foi encontrado
    if (frm) {
        frm.addEventListener('submit', (event) => {
            // Previne o comportamento padrão do formulário (que é recarregar a página)
            event.preventDefault();

            // Verifica se o usuário realmente escolheu um tipo de descarte
            

            // 3. Redireciona o usuário para a página de confirmação/suporte
            if (descarteEscolhido === 'Eletronico') {window.location.href = 'HTML-TELA7-1.html';}
            else {
            
            // Se for QUALQUER OUTRA OPÇÃO, aí sim coletamos e salvamos os dados.
            
            // 1. Coleta todos os dados dos campos em um único objeto
            const dadosDoFormulario = {
                nome: document.getElementById('nome').value,
                telefone: document.getElementById('telefone').value,
                email: document.getElementById('email').value,
                endereco: document.getElementById('endereco').value,
                observacoes: document.getElementById('obs').value,
                tipoDescarte: descarteEscolhido
            };

            // 2. Converte e salva os dados no localStorage
            localStorage.setItem('dadosDescarte', JSON.stringify(dadosDoFormulario));

            // 3. Redireciona para a página padrão
            window.location.href = 'HTML-TELA3-1.html';
        }
                 
            
        });
    } else {
        console.error("Erro: O elemento do formulário com id '#inform' não foi encontrado.");
    }
});