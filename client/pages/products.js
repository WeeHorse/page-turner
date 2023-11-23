export default async function products() {
  // load products from the database
  const response = await fetch('/api/products')
  const products = await response.json()

  // create html
  let html = `
    <h2 class="name">Listings – <em>for prying eyes only</em></h2>    
  `
  // add the products 
  for(let product of products){
    const article = `
      <article>
        <h2 class="name">${product.name}</h2>
        <p>${product.description}</p>
        <img src="${product.image}">
        <p><span class="price">${product.price}</span>kr</p>
        <button onclick="addToCart(${product.id})">Add to cart</button>
      </article>
    `
    html += article
  }
  return html
}