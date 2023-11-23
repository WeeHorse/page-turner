const intialCart = `
    <h3>Cart</h3>
    <ul>      
    </ul>
    <p class="total"></p>
  `

// run initial load
initialLoad()

export async function addToCart(productId) {
  saveNewItem(productId)
  const cart = await loadCart()
  renderCart(cart)
  updateTotal(cart)  
}

async function saveNewItem(productId) {
  let response = await fetch('/api/cart-items', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({product: productId})
  });
  response = await response.json();
  return response
}

async function initialLoad() {
  const cart = await loadCart()
  if (cart.length > 0) {
    renderCart(cart)
    updateTotal(cart)
  }
}

async function loadCart() {
  const response = await fetch('/api/cart-items') // fetch previous / saved state
  const cart = await response.json()
  return cart
}

function renderCart(cart) {
  // reset the cart before rerender
  $('#cart').html(intialCart)
  // rerender
  for (let item of cart) {
    $('#cart ul').append(`
      <li>
        ${item.name} <span class="price">${item.price}</span>kr
      </li >
    `)
  }
}

function updateTotal(cart) {
  let total = 0
  for (let item of cart) {
    total += item.price
  }
  $('#cart .total').html(`Total: <span>${total}</span>kr`)
}