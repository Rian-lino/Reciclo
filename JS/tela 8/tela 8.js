document.addEventListener('DOMContentLoaded', function() { // Aguarda o carregamento completo da página

    const botaoVoltar = document.getElementById('botao-voltar'); // Captura o botão pelo seu ID

    if (botaoVoltar) { // Verifica se o botão foi encontrado
        botaoVoltar.addEventListener('click', function(event) { // Adiciona o evento de clique ao botão
            event.preventDefault(); // Impede o comportamento padrão do link
            history.back(); // Executa a função de voltar para a página anterior
        });
    }

});