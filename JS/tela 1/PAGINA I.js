 // --- Lógica para o PRIMEIRO botão ---
        // 1. Seleciona o primeiro botão pelo seu ID
        const botaoProdutos = document.getElementById('inQDesc');

        // 2. Adiciona o "ouvinte de evento" de clique para ele
        botaoProdutos.addEventListener('click', function() {
            // 3. Define a ação (redirecionar para produtos.html)
            window.location.href = "HTML-TELA2-1.html";
        });

        // --- Lógica para o SEGUNDO botão ---
        // 1. Seleciona o segundo botão pelo seu ID
        const botaoContato = document.getElementById('inBDesc');

        // 2. Adiciona o "ouvinte de evento" de clique para ele
        botaoContato.addEventListener('click', function() {
            // 3. Define a ação (redirecionar para contato.html)
            window.location.href = 'HTML-TELA4-1.html';
        });