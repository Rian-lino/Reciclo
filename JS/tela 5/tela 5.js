document.addEventListener('DOMContentLoaded', () => {

    // --- PARTE 0: CARREGAR NOME DO USUÁRIO ---
    const nomeSalvo = localStorage.getItem('nomeusuario');
    const elementoNome = document.getElementById('nome-catador');
    if (nomeSalvo && elementoNome) {
        elementoNome.textContent = nomeSalvo;
    }

    // --- PARTE 1: PREPARAÇÃO INICIAL DOS ITENS ---
    const todosOsItens = document.querySelectorAll('.item-descarte');
    todosOsItens.forEach(item => {
        const pMaterial = Array.from(item.querySelectorAll('p')).find(p => p.textContent.includes('Material:'));
        if (pMaterial && pMaterial.textContent.split(':')[1] && pMaterial.textContent.split(':')[1].trim() !== '') {
            const material = pMaterial.textContent.split(':')[1].trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            item.dataset.categoria = material;
        }
    });

    // --- PARTE 2: CARREGAMENTO DE NOVAS SOLICITAÇÕES ---
    const dadosSalvos = localStorage.getItem('dadosDescarte');
    const containerDeDescartes = document.querySelector('.lista-descartes');
    if (dadosSalvos && containerDeDescartes) {
        const dados = JSON.parse(dadosSalvos);
        const tipoDeMaterial = dados.tipoDescarte;
        const novoItemHTML = `
            <div class="item-descarte" data-categoria="${tipoDeMaterial}">
                <div class="caixa-descarte">
                    <p><strong>Nome:</strong> ${dados.nome}</p>
                    <p><strong>Localização:</strong> ${dados.endereco}</p>
                    <p><strong>Material:</strong> ${dados.tipoDescarte}</p>
                    <p><strong>Contato:</strong> ${dados.telefone}</p>
                    <p><strong>Observações:</strong> ${dados.observacoes}</p>
                </div>
                <button class="botao-aceitar">
                    <img src="imgs/tela 5/aceitar.png" alt="Aceitar" class="icone-botao">
                    Aceitar coleta
                </button>
            </div>`;
        containerDeDescartes.insertAdjacentHTML('afterbegin', novoItemHTML);
        localStorage.removeItem('dadosDescarte');
    }

    // ===================================================================
    // PARTE 3: LÓGICA DE FILTRAGEM E PESQUISA (MODIFICADA)
    // ===================================================================
    const filtros = document.querySelectorAll('.filtro');
    const botaoLimpar = document.querySelector('.icone-limpar');
    const campoPesquisa = document.getElementById('campo-pesquisa-input'); // NOVO
    const itensParaFiltrar = document.querySelectorAll('.item-descarte');

    function aplicarFiltros() {
        // Pega os filtros de material ativos
        const filtrosAtivos = Array.from(document.querySelectorAll('.filtro.selecionado'))
                                   .map(filtro => filtro.dataset.categoria);
        
        // Pega o texto da barra de pesquisa
        const termoPesquisa = campoPesquisa.value.toLowerCase().trim(); // NOVO

        itensParaFiltrar.forEach(item => {
            const itemCategoria = item.dataset.categoria || '';
            const textoDoItem = item.textContent.toLowerCase(); // NOVO

            // CONDIÇÕES PARA O ITEM APARECER
            const matchesMaterialFilter = filtrosAtivos.length === 0 || filtrosAtivos.includes(itemCategoria);
            const matchesSearchTerm = textoDoItem.includes(termoPesquisa); // NOVO

            // O item só aparece se corresponder a AMBAS as condições
            if (matchesMaterialFilter && matchesSearchTerm) { // LÓGICA COMBINADA
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // ===================================================================
    // PARTE 4: ADICIONANDO OS EVENTOS DE CLIQUE E DIGITAÇÃO
    // ===================================================================
    
    // Evento para a barra de pesquisa (aciona a cada tecla digitada)
    campoPesquisa.addEventListener('input', aplicarFiltros); // NOVO

    // Eventos para os botões de filtro
    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            filtro.classList.toggle('selecionado');
            aplicarFiltros();
        });
    });

    // Evento para o botão de limpar
    botaoLimpar.addEventListener('click', () => {
        filtros.forEach(filtro => filtro.classList.remove('selecionado'));
        campoPesquisa.value = ''; // Limpa também o campo de pesquisa
        aplicarFiltros();
    });
});