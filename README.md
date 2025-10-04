# ♻️ Reciclo

Bem-vindo ao repositório do Reciclo! Este projeto é uma plataforma web front-end desenvolvida para facilitar a conexão entre cidadãos que desejam descartar materiais recicláveis e os catadores/recicladores locais, otimizando o processo de coleta seletiva.

🔗 **Acesse a versão ao vivo:** https://github.com/Rian-lino/Reciclo

## ✨ Funcionalidades Principais

O projeto simula a interação de dois tipos de usuários: o cidadão que descarta e o catador que coleta.

### Para o Cidadão (Gerador do Descarte)
* **📝 Cadastro de Solicitação:** Preenchimento de um formulário com dados de contato, endereço e informações sobre o material.
* **👆 Seleção de Material:** Escolha do tipo de material a ser descartado (ex: Papelão, Plástico, Vidro, Metal).
* **🔀 Fluxo Diferenciado:** A seleção de "Eletrônicos" direciona o usuário para uma página de informações específicas, sem salvar os dados da solicitação.

### Para o Catador (Reciclador)
* **📊 Dashboard de Coletas:** Visualização de uma lista com todas as solicitações de descarte disponíveis.
* **🔍 Filtragem por Material:** Botões interativos que permitem filtrar a lista para exibir apenas os materiais de interesse (com suporte a multi-seleção).
* **🔎 Pesquisa por Texto:** Campo de busca para encontrar solicitações por nome, localização ou qualquer outro texto contido na descrição.
* **👤 Personalização:** O nome do catador, inserido em uma página anterior, é exibido dinamicamente no cabeçalho.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando apenas tecnologias front-end, com foco na manipulação do DOM e armazenamento de dados no navegador.

* **HTML5**
* **CSS3**
* **JavaScript (Puro / Vanilla JS)**
    * Manipulação do DOM
    * Event Listeners
    * Uso de `localStorage` para transição de dados entre páginas.

## 🚀 Como Executar o Projeto Localmente

Para testar o projeto na sua própria máquina, siga os passos abaixo:

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/](https://github.com/)<seu-usuario-github>/<nome-do-seu-repositorio>.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd <nome-do-seu-repositorio>
    ```
3.  Abra o arquivo `index.html` no seu navegador de preferência.

## 📂 Estrutura do Projeto

O repositório está organizado da seguinte forma para manter a clareza e a manutenibilidade:

```
/
├── index.html            # Página inicial de cadastro
├── HTML-TELA...html      # Demais páginas da aplicação
├── css/                  # Pasta para todos os arquivos de estilo
├── js/                   # Pasta para todos os arquivos de script
├── imgs/                 # Pasta para todas as imagens
└── README.md             # Este arquivo
```

## 🔮 Futuras Implementações

* Integração com um back-end (Node.js, Python, etc.) para persistência real dos dados.
* Sistema de login e autenticação para usuários e catadores.
* Uso de geolocalização para o filtro "Perto de você".
* Notificações em tempo real quando uma nova coleta for cadastrada.

## 👤 Autor

Feito por **[Rian Lino,Pedro Augusto,Lucrécia França,Djennifer Santos]**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)]([SEU-LINK-DO-LINKEDIN-AQUI])
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/<Rian-lino-github>/)
