document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.product-grid');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');

    let cart = [];

    // Dados dos produtos (em um ambiente real, viria de um banco de dados)
    const products = [
        { id: 1, name: 'Bicicleta de Montanha', price: 1200.00, image: 'https://images.unsplash.com/photo-1576426863848-c21f63e60295?q=80&w=2070&auto=format&fit=crop' },
        { id: 2, name: 'Bicicleta de Estrada', price: 1800.50, image: 'https://images.unsplash.com/photo-1585728748348-5279a0283c7b?q=80&w=1939&auto=format&fit=crop' },
        { id: 3, name: 'Bicicleta Urbana', price: 850.75, image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1974&auto=format&fit=crop' },
        { id: 4, name: 'Bicicleta Infantil', price: 450.00, image: 'https://images.unsplash.com/photo-1559348344-3d2d3ce44951?q=80&w=2070&auto=format&fit=crop' }
    ];

    // Função para renderizar os produtos na página
    function renderProducts() {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">R$ ${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    // Função para renderizar os itens do carrinho
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <span>${item.name} (R$ ${item.price.toFixed(2)})</span>
                    <button class="remove-from-cart" data-id="${item.id}">Remover</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }
        updateCartTotal();
    }

    // Função para atualizar o total do carrinho
    function updateCartTotal() {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotalSpan.textContent = total.toFixed(2);
    }

    // Adicionar item ao carrinho
    productsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const productToAdd = products.find(p => p.id === productId);
            cart.push(productToAdd);
            renderCart();
        }
    });

    // Remover item do carrinho
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const itemIndex = cart.findIndex(item => item.id === productId);
            if (itemIndex > -1) {
                cart.splice(itemIndex, 1);
            }
            renderCart();
        }
    });
    
    // Botão Finalizar Compra
    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert(`Compra finalizada! Total: R$ ${cartTotalSpan.textContent}`);
            cart = [];document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.product-grid');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');

    let cart = [];

    // Dados dos produtos (em um ambiente real, viria de um banco de dados)
    const products = [
        { id: 1, name: 'Bicicleta de Montanha', price: 1200.00, image: 'https://images.unsplash.com/photo-1576426863848-c21f63e60295?q=80&w=2070&auto=format&fit=crop' },
        { id: 2, name: 'Bicicleta de Estrada', price: 1800.50, image: 'https://images.unsplash.com/photo-1585728748348-5279a0283c7b?q=80&w=1939&auto=format&fit=crop' },
        { id: 3, name: 'Bicicleta Urbana', price: 850.75, image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1974&auto=format&fit=crop' },
        { id: 4, name: 'Bicicleta Infantil', price: 450.00, image: 'https://images.unsplash.com/photo-1559348344-3d2d3ce44951?q=80&w=2070&auto=format&fit=crop' }
    ];

    // Função para renderizar os produtos na página
    function renderProducts() {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">R$ ${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    // Função para renderizar os itens do carrinho
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <span>${item.name} (R$ ${item.price.toFixed(2)})</span>
                    <button class="remove-from-cart" data-id="${item.id}">Remover</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }
        updateCartTotal();
    }

    // Função para atualizar o total do carrinho
    function updateCartTotal() {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotalSpan.textContent = total.toFixed(2);
    }

    // Adicionar item ao carrinho
    productsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const productToAdd = products.find(p => p.id === productId);
            cart.push(productToAdd);
            renderCart();
        }
    });

    // Remover item do carrinho
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const itemIndex = cart.findIndex(item => item.id === productId);
            if (itemIndex > -1) {
                cart.splice(itemIndex, 1);
            }
            renderCart();
        }
    });
    
    // Botão Finalizar Compra
    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert(`Compra finalizada! Total: R$ ${cartTotalSpan.textContent}`);
            cart = [];
            renderCart();
        } else {
            alert('Seu carrinho está vazio!');
        }
    });

    // Inicialização
    renderProducts();
    renderCart();
});
            renderCart();
        } else {
            alert('Seu carrinho está vazio!');
        }
    });

    // Inicialização
    renderProducts();
    renderCart();
});