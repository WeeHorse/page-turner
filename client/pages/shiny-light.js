import { addToCart } from "../components/cart.js"
window.addToCart = addToCart // expose addToCart to global scope

export default function shinyLight() {
  return `
    <article>
      <h2 class="name">Shiny Light</h2>
      <p>Fantastic shiny product</p>
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shiny-bright-light-for-designs-template-87d24e55170a5c1c426f451462b53748_screen.jpg?ts=1638393699">
      <p><span class="price">150</span>kr</p>
      <button onclick="addToCart(this)">Add to cart</button>
    </article>
  `
}