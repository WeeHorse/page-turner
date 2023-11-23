// components, not used in router
import login from "./components/login.js"
$('#login').html(login())
import cart from "./components/cart.js"
cart()

// pages, used in router
import shinyLight from "./pages/shiny-light.js"
import platosCave from "./pages/platos-cave.js"
import home from "./pages/home.js"
import products from "./pages/products.js"

// routed pages
async function router() {
  switch (location.hash) {
    case "#shiny-light":
      $('main').html(shinyLight())
      break
    case "#platos-cave":
      $('main').html(platosCave())
      break
    case "":
      $('main').html(home())
      break
    case "#products":
      $('main').html(await products())
      break
    default:
      $('main').html(`<h2><strong>404</strong> Good job! You've broken the internet.</h2>`)
  }
}

window.onhashchange = router
window.onload = router
