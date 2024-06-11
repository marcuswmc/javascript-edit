const cart = {
  userId: 1,
  date: new Date().toISOString().split('T')[0],
  products: []
};

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return data
}

const createProductCard = (product) => {
const productCard = document.createElement('div')
productCard.className = 'product-card'

productCard.innerHTML = `

<div class="product-img"><img src="${product.image}"></div>

<div class="product-body">
<h3 class="product-title">${product.title}</h3>
<p class="product-price">Price: $${product.price}</p>
<button class="btn btn-add-to-cart">Add to cart</button>
</div>
`
const addToCartBtn = productCard.querySelector('.btn-add-to-cart')
  addToCartBtn.addEventListener('click', () => {
    addToCart(product.id)
})

return productCard
}

const addToCart = (productId) => {
  const productsInCart = cart.products.find((product) => product.id === productId)
  if (!productsInCart) {
  cart.products.push({productId, quantity: 1})
  } else {
  productsInCart.quantity++
  }
  updateCart()
}

const updateCart = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/carts/7', {
      method: 'PUT',
      body: JSON.stringify(cart),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error('Falha ao conectar ao cart');
    }

    const data = await response.json();
    console.log('Cart atualizado com sucesso', data);
  } catch (error) {
    console.error('Erro ao atualizar o cart:', error);
  }
}

const loadProducts = async () => {
  const container = document.querySelector('.container')
  const products = await getProducts()

  products.forEach(product => {
    const productCard = createProductCard(product)
    container.appendChild(productCard)
  });
}

loadProducts()



