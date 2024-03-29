// components, not used in router
import loginInit from "./components/login.js"
$('#login').html(loginInit())

import cart from "./components/cart.js"
cart()

// pages, used in router
import home from "./pages/home.js"
import products from "./pages/products.js"
import about from "./pages/about.js"
import contact from "./pages/contact.js"

// routed pages
async function router() {
  switch (location.hash) {

    case "":
      $('main').html(home())
      break

    case "#products":
      $('main').html(await products())
      break

    case "#about":
      $('main').html(about())
      break

    case "#contact":
      $('main').html(contact())
      break

    default:
      $('main').html(`<h2><strong>404</strong> Good job! You've broken the internet.</h2>`)

  }
}

// event handlers, calls the router function on each event (change, load)
window.onhashchange = router
window.onload = router
