// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os elementos
    const botoesAdicionar = document.querySelectorAll('.add-carrinho');
    const listaCarrinhoUI = document.getElementById('lista-carrinho');
    const totalCarrinhoUI = document.getElementById('total-carrinho');
    const btnFinalizar = document.getElementById('finalizar-compra');
    const msgCarrinhoVazio = document.querySelector('.empty-cart');

    let carrinho = [];
    let total = 0;

    // Adiciona evento de clique para cada botão "Adicionar"
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', adicionarAoCarrinho);
    });

    // Função para adicionar item
    function adicionarAoCarrinho(event) {
        const nome = event.target.dataset.nome;
        const preco = parseFloat(event.target.dataset.preco);

        // Adiciona ao array
        carrinho.push({ nome, preco });
        
        // Atualiza o total
        total += preco;

        // Atualiza a tela
        atualizarDisplayCarrinho();
    }

    // Função para mostrar os itens na tela
    function atualizarDisplayCarrinho() {
        // Limpa a lista
        listaCarrinhoUI.innerHTML = '';

        if (carrinho.length === 0) {
            // Mostra a mensagem de carrinho vazio
            listaCarrinhoUI.appendChild(msgCarrinhoVazio);
        } else {
            // Adiciona cada item como um <li>
            carrinho.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `${item.nome} <span>R$ ${item.preco.toFixed(2)}</span>`;
                listaCarrinhoUI.appendChild(li);
            });
        }

        // Atualiza o total
        totalCarrinhoUI.textContent = `R$ ${total.toFixed(2)}`;
    }

    // Evento do botão Finalizar Compra
    btnFinalizar.addEventListener('click', () => {
        if (carrinho.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }

        // Simula a finalização
        alert(`Obrigado pela sua compra! \nTotal: R$ ${total.toFixed(2)}\n\n(Lembre-se: este é um site de demonstração.)`);

        // Limpa o carrinho
        carrinho = [];
        total = 0;
        atualizarDisplayCarrinho();
    });

    // Inicia o display
    atualizarDisplayCarrinho();
});