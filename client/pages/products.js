export default async function () {

  const response = await fetch('/api/products')
  const products = await response.json()
  console.log(products)

  // create html 

  let html = `<h2 class="name">Listings – <em>for prying eyes only</em></h2>`

  for (let product of products) {
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