const campoNome = document.getElementById('nome'); // Captura o campo de nome
const botaocadastro = document.getElementById('entrar'); // Captura o botão de cadastro

botaocadastro.addEventListener('click', (e) => { // Adiciona o evento de clique ao botão
    const nomeDoUsuario = campoNome.value; // Pega o valor digitado no campo de nome

    if (nomeDoUsuario.trim() !== '') { // Verifica se o campo de nome não está vazio
        
        localStorage.setItem('nomeusuario', nomeDoUsuario); // Salva o nome do usuário no armazenamento do navegador

        const linkDeDestino = document.getElementById('link-finalizar'); // Captura o link de destino para redirecionamento
        
        if (linkDeDestino) { // Verifica se o link foi encontrado
            window.location.href = linkDeDestino.href; // Redireciona para o endereço do link
        } else { // Executa caso o link não seja encontrado
            console.error("Erro: Link com id='link-finalizar' não encontrado no HTML. O redirecionamento falhou."); // Exibe um erro no console
        }

    } else { // Executa se o campo de nome estiver vazio
        alert('Por favor, preencha seu nome para continuar.'); // Exibe um alerta para o usuário
    }
});