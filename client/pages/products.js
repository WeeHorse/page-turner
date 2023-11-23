export default async function() {

  const response = await fetch('/api/products')
  const products = await response.json()
  console.log(products)

  // create html
  let html = `
    <h2 class="name">Listings – <em>for prying eyes only</em></h2>    
    <article>
      <h2 class="name">Plato's Cave</h2>
      <p>Available upon special request</p>
      <img src="https://i0.wp.com/verdict.justia.com/wp-content/uploads/2014/01/shutterstock_107923763.jpg?quality=100&resize=1200%2C440&strip=all&fit=1000%25">
      <p><span class="price">1200</span>kr</p>
      <button onclick="addToCart(this)">Add to cart</button>
    </article>
    <article>
      <h2 class="name">Shiny Light</h2>
      <p>Fantastic shiny product</p>
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shiny-bright-light-for-designs-template-87d24e55170a5c1c426f451462b53748_screen.jpg?ts=1638393699">
      <p><span class="price">150</span>kr</p>
      <button onclick="addToCart(this)">Add to cart</button>
    </article>
  `

  return html
}