export default async function init(){
  $('#cart').html(await loadCart())
}


export async function addToCart(productId) {
  saveNewItem(productId)
  $('#cart').html(await loadCart())
}

async function saveNewItem(productId) {
  let response = await fetch('/api/cart-items', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({product: productId, amount: 1})
  });
  response = await response.json();
  return response
}

async function loadCart() {
  const response = await fetch('/api/cart-items') // fetch previous / saved state
  const cart = await response.json()
  if (cart.length > 0) {
    return renderCart(cart)
  }
}

function renderCart(cart) {
  
  // render items
  let items = ''
  for (let item of cart) {
    items += `
      <li>
        ${item.name} <span class="price">${item.price}</span>kr
      </li >
    `
  }

  // update total
  let total = 0
  for (let item of cart) {
    total += item.price
  }

  // compose the cart html output
  return `
    <h3>Cart</h3>
    <ul>  
      ${items}    
    </ul>
    <p class="total">Total: <span>${total}</span>kr</p>
  `  
}
