// Aguarda o DOM (estrutura HTML) ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // --- NOSSO BANCO DE DADOS DE PRODUTOS (HARDCODED) ---
    // Em um site real, isso viria de um servidor/API
    const produtos = [
        {
            id: 1,
            nome: 'Bike Mountain Pro',
            preco: 2499.90,ttps://imgcentauro-a.akamaihd.net/1200x1200/M16CLL15A1.jpg'
        
        {
            id: 2,
            nome: 'Bike Urbana Clássica',
            preco: 1299.50,
            imagem: 'https://via.placeholder.com/250/e9c46a/FFFFFF?text=Bike+Urbana'
        },
        {
            id: 3,
            nome: 'Bike Elétrica Speed',
            preco: 5800.00,
            imagem: 'https://via.placeholder.com/250/f4a261/FFFFFF?text=Bike+Eletrica'
        },
        {
            id: 4,
            nome: 'Bike Infantil Aro 16',
            preco: 499.00,
            imagem: 'https://via.placeholder.com/250/e76f51/FFFFFF?text=Bike+Infantil'
        }
    ];

    // --- VARIÁVEIS GLOBAIS ---
    let carrinho = []; // Array que armazena os itens do carrinho

    // --- SELETORES DO DOM ---
    // Pegando os elementos do HTML para interagir com eles
    const containerProdutos = document.getElementById('produtos-container');
    const listaItensCarrinho = document.getElementById('carrinho-itens');
    const spanTotalCarrinho = document.getElementById('carrinho-total');
    const btnLimparCarrinho = document.getElementById('btn-limpar-carrinho');

    // --- FUNÇÕES ---

    /**
     * Função 1: Renderiza os produtos na tela
     * Pega o array 'produtos' e cria o HTML para cada um
     */
    function renderizarProdutos() {
        // Limpa o container caso já tenha algo
        containerProdutos.innerHTML = '';

        // Itera sobre o array de produtos
        produtos.forEach(produto => {
            // Cria um card de produto
            const card = document.createElement('div');
            card.className = 'produto-card'; // Adiciona a classe CSS

            // Define o HTML interno do card
            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                <button class="btn-adicionar" data-id="${produto.id}">Adicionar ao Carrinho</button>
            `;

            // Adiciona o card criado ao container na página
            containerProdutos.appendChild(card);
        });

        // Adiciona os event listeners aos botões "Adicionar" recém-criados
        adicionarListenersBotoes();
    }

    /**
     * Função 2: Adiciona listeners aos botões "Adicionar ao Carrinho"
     */
    function adicionarListenersBotoes() {
        const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
        botoesAdicionar.forEach(botao => {
            botao.addEventListener('click', (evento) => {
                // Pega o ID do produto clicado (do atributo data-id)
                const idProduto = parseInt(evento.target.getAttribute('data-id'));
                // Adiciona ao carrinho
                adicionarAoCarrinho(idProduto);
            });
        });
    }

    /**
     * Função 3: Adiciona um produto ao carrinho
     * @param {number} idProduto - O ID do produto a ser adicionado
     */
    function adicionarAoCarrinho(idProduto) {
        // Encontra o produto no nosso "banco de dados"
        const produto = produtos.find(p => p.id === idProduto);

        if (produto) {
            // Adiciona o produto encontrado ao array 'carrinho'
            carrinho.push(produto);
            console.log('Carrinho:', carrinho); // Para debug
            
            // Atualiza a exibição do carrinho
            renderizarCarrinho();
        }
    }

    /**
     * Função 4: Renderiza os itens do carrinho na tela e atualiza o total
     */
    function renderizarCarrinho() {
        // Limpa a lista de itens (começa do zero)
        listaItensCarrinho.innerHTML = '';

        let total = 0;

        if (carrinho.length === 0) {
            listaItensCarrinho.innerHTML = '<li>Seu carrinho está vazio.</li>';
        } else {
            // Itera sobre os itens no carrinho
            carrinho.forEach(item => {
                // Cria um item <li> para a lista do carrinho
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${item.nome}</span>
                    <span>R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                `;
                listaItensCarrinho.appendChild(li);

                // Soma o preço do item ao total
                total += item.preco;
            });
        }

        // Atualiza o texto do total
        spanTotalCarrinho.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    /**
     * Função 5: Limpa o carrinho
     */
    function limparCarrinho() {
        carrinho = []; // Esvazia o array
        renderizarCarrinho(); // Atualiza a tela (que mostrará o carrinho vazio)
    }


    // --- INICIALIZAÇÃO E EVENTOS GLOBAIS ---

    // Adiciona o evento de clique ao botão "Limpar Carrinho"
    btnLimparCarrinho.addEventListener('click', limparCarrinho);

    // Chama a função para exibir os produtos assim que a página carregar
    renderizarProdutos();
});