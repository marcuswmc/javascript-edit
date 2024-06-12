const getProduct = async () => {
  const response = await fetch('https://fakestoreapi.com/products/10')
  const data = await response.json()
  return data
}

const createProduct = (product) => {
  const container = document.querySelector('.product-container')
  container.innerHTML = `
  <div class="product-image"><img src="${product.image}"></div>
  <div class="product-info">
  <span class="product-id">Product id: ${product.id}</span>
  <h3 class="product-title">${product.title}</h3>
  <p class="product-price">Price: $${product.price}</p>
  <p class="product-description">${product.description}</p>
  <p class="quantity-label">Quantity</p>
  <input type="number" class="quantity-input" value="1" min="1" max="10">
  <button class="btn-add-to-cart">Add To Cart</button>
  </div>
  `

  return container
}


const createRelatedProducts = (product) => {
  const relatedProductsCard = document.createElement('div')
  relatedProductsCard.className = 'related-product-card'
  relatedProductsCard.innerHTML = `
  <div class="product-info related">
  <div class="related-product-image"><img src="${product.image}"></div>
  <h3 class="related-product-title>${product.title}</h3>
  <p class="related-product-description">Description: ${product.description}</p>
  <p class="related-product-price">Price: $${product.price}</p>
  <span class="related-product-id"> ID: ${product.id}</span>
  </div>
  ` 
  return relatedProductsCard
}

const loadRelatedProduct = async () => {
  const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
  const relatedProducts = await response.json()

  const relatedContainer = document.querySelector('.related-products')
  relatedProducts.slice(0, 3).forEach(product => {
    const relatedProductCard = createRelatedProducts(product)
    relatedContainer.appendChild(relatedProductCard)
  })
}

const loadProducts = async () => {
  const params = new URLSearchParams(window.location.search)
  const productId = params.get('id')
  
  const product = await getProduct(productId)

  createProduct(product)
  createRelatedProducts(product)

}

loadProducts()
loadRelatedProduct()

