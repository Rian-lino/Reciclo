// Espera a página carregar completamente
document.addEventListener('DOMContentLoaded', function() {
  
  // Encontra o botão pelo ID
  const botaoVoltar = document.getElementById('botao-voltar');

  // Adiciona um "ouvinte" de clique
  if (botaoVoltar) {
    botaoVoltar.addEventListener('click', function(event) {
      event.preventDefault(); // Impede a ação padrão do link
      history.back();         // Executa a ação de voltar
    });
  }

});