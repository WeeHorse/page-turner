import { addToCart } from "../components/cart.js"
window.addToCart = addToCart // expose addToCart to global scope

export default function platosCave() {
  return `
    <article>
      <h2 class="name">Plato's Cave</h2>
      <p>Available upon special request</p>
      <img src="https://i0.wp.com/verdict.justia.com/wp-content/uploads/2014/01/shutterstock_107923763.jpg?quality=100&resize=1200%2C440&strip=all&fit=1000%25">
      <p><span class="price">1200</span>kr</p>
      <button onclick="addToCart(this)">Add to cart</button>
    </article>
  `
}