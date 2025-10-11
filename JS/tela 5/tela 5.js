document.addEventListener('DOMContentLoaded', () => { // Aguarda o carregamento completo da página

    const nomeSalvo = localStorage.getItem('nomeusuario'); // Busca o nome salvo no armazenamento
    const elementoNome = document.getElementById('nome-catador'); // Captura o elemento para exibir o nome
    if (nomeSalvo && elementoNome) { // Verifica se o nome e o elemento existem
        elementoNome.textContent = nomeSalvo; // Exibe o nome do usuário na página
    }

    const todosOsItens = document.querySelectorAll('.item-descarte'); // Captura todos os itens de descarte
    todosOsItens.forEach(item => { // Percorre cada um dos itens
        const pMaterial = Array.from(item.querySelectorAll('p')).find(p => p.textContent.includes('Material:')); // Encontra o parágrafo que contém o material
        if (pMaterial && pMaterial.textContent.split(':')[1] && pMaterial.textContent.split(':')[1].trim() !== '') { // Verifica se a informação de material existe
            const material = pMaterial.textContent.split(':')[1].trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Extrai e formata o tipo de material
            item.dataset.categoria = material; // Define a categoria do item para facilitar a filtragem
        }
    });

    const dadosSalvos = localStorage.getItem('dadosDescarte'); // Busca os dados de um novo descarte no armazenamento
    const containerDeDescartes = document.querySelector('.lista-descartes'); // Captura o container onde os descartes são listados
    if (dadosSalvos && containerDeDescartes) { // Verifica se existem novos dados e o container
        const dados = JSON.parse(dadosSalvos); // Converte os dados salvos de texto para objeto
        const tipoDeMaterial = dados.tipoDescarte; // Pega o tipo de material dos novos dados
        const novoItemHTML = `...`; // Cria a estrutura HTML para o novo item de descarte (código omitido por ser grande)
        containerDeDescartes.insertAdjacentHTML('afterbegin', novoItemHTML); // Adiciona o novo item no início da lista
        localStorage.removeItem('dadosDescarte'); // Remove os dados para não duplicar
    }
    
    const filtros = document.querySelectorAll('.filtro'); // Captura todos os botões de filtro
    const botaoLimpar = document.querySelector('.icone-limpar'); // Captura o botão de limpar filtro
    const campoPesquisa = document.getElementById('campo-pesquisa-input'); // Captura o campo de pesquisa
    const itensParaFiltrar = document.querySelectorAll('.item-descarte'); // Captura novamente todos os itens (incluindo o novo)

    function aplicarFiltros() { // Define a função principal para filtrar os itens
        const filtrosAtivos = Array.from(document.querySelectorAll('.filtro.selecionado')).map(filtro => filtro.dataset.categoria); // Cria uma lista com as categorias dos filtros selecionados
        const termoPesquisa = campoPesquisa.value.toLowerCase().trim(); // Pega o texto do campo de pesquisa e formata

        itensParaFiltrar.forEach(item => { // Percorre cada item para decidir se ele deve aparecer
            const itemCategoria = item.dataset.categoria || ''; // Pega a categoria do item
            const textoDoItem = item.textContent.toLowerCase(); // Pega todo o texto do item e formata

            const matchesMaterialFilter = filtrosAtivos.length === 0 || filtrosAtivos.includes(itemCategoria); // Verifica se o item corresponde ao filtro de material
            const matchesSearchTerm = textoDoItem.includes(termoPesquisa); // Verifica se o item corresponde ao termo pesquisado

            if (matchesMaterialFilter && matchesSearchTerm) { // Verifica se o item atende às duas condições
                item.style.display = 'block'; // Mostra o item
            } else { // Caso contrário
                item.style.display = 'none'; // Esconde o item
            }
        });
    }

    campoPesquisa.addEventListener('input', aplicarFiltros); // Adiciona o evento de digitação para filtrar em tempo real

    filtros.forEach(filtro => { // Percorre cada botão de filtro
        filtro.addEventListener('click', () => { // Adiciona o evento de clique a cada filtro
            filtro.classList.toggle('selecionado'); // Adiciona ou remove a classe de seleção
            aplicarFiltros(); // Executa a função de filtrar novamente
        });
    });

    botaoLimpar.addEventListener('click', () => { // Adiciona o evento de clique ao botão de limpar
        filtros.forEach(filtro => filtro.classList.remove('selecionado')); // Remove a seleção de todos os filtros
        campoPesquisa.value = ''; // Limpa o campo de pesquisa
        aplicarFiltros(); // Executa a função de filtrar para mostrar todos
    });
});

const botaosuporte = document.querySelector ('#BotSuporte'); // Captura o botão de suporte
botaosuporte.addEventListener('click', function() { // Adiciona o evento de clique ao botão
    window.location.href = "HTML-TELA8-1.html"; // Define a ação de redirecionamento para a tela de suporte
});