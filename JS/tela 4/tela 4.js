// Renomeei a variável para 'campoNome' para ficar mais claro
const campoNome = document.getElementById('nome'); 
const botaocadastro = document.getElementById('entrar');

botaocadastro.addEventListener('click', (e) => {
    // Agora estamos usando a mesma variável 'campoNome' que foi declarada acima
    const nomeDoUsuario = campoNome.value;

    if (nomeDoUsuario.trim() !== '') {
        
        // Salva o nome no localStorage
        localStorage.setItem('nomeusuario', nomeDoUsuario);

        // Supondo que você ainda tenha o link com id="link-finalizar" no seu HTML
        const linkDeDestino = document.getElementById('link-finalizar');
        
        // Adicionada uma verificação para garantir que o link foi encontrado antes de redirecionar
        if (linkDeDestino) {
            window.location.href = linkDeDestino.href;
        } else {
            console.error("Erro: Link com id='link-finalizar' não encontrado no HTML. O redirecionamento falhou.");
            // Se preferir, pode redirecionar para uma página padrão caso o link falhe
            // window.location.href = 'pagina-padrao.html';
        }

    } else {
        alert('Por favor, preencha seu nome para continuar.');
    }
});