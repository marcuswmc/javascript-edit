const product01 = { id: 1, name: 'Produto 1', price: 100 };
const product02 = { id: 2, name: 'Produto 2', price: 200 };
const product03 = { id: 3, name: 'Produto 3', price: 300 };

class Ecommerce {
  constructor() {
    this.products = []
    this.cart = []
  }

  addProduct(product) {
    this.products.push(product)
  }

  setProductPrice(productId, price) {
    const product = this.products.find(p => p.id === productId)
    if (product) {
      product.price = price
    }
  }

  getAllProducts() {
    return this.products
  }

  getAllProductsNames() {
    return this.products.map(p => p.name).join('; ')
  }

  getProductById(productId) {
    return this.products.find(p => p.id === productId)
  }

  getProductByName(productName){
    return this.products.find(p = p.name === productName)
  }

  getProductByPrice(initialPrice, finalPrice) {
    return this.products.filter(p => p.price >= initialPrice && p.price <= finalPrice)
  }

  addProductToCart(product){
    return this.cart.push(product)
  }

  getCart() {
    return this.cart
  }

  getCartTotalPrice(){
    return this.cart.reduce((acc, current) => acc + current.price, 0)
  }

}

const ecommerce = new Ecommerce()

ecommerce.addProduct(product01)
ecommerce.addProduct(product02)
ecommerce.addProduct(product03)

console.log(ecommerce.getAllProducts())

ecommerce.setProductPrice(2, 600)
console.log(ecommerce.getProductById(2))

