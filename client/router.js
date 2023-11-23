import home from "./pages/home.js"
import products from "./pages/products.js"

async function router() {
  switch (location.hash) {

    case "":
      $('main').html(home())
      break

    case "#products":
      $('main').html(await products())
      break

    case "#about":
      $('main').html(`<h2>About our historical endeavour</h2>`)
      break

    case "#contact":
      $('main').html(`<h2>Contact information</h2><p>Is provided on a need to know basis</p>`)
      break

    default:
      $('main').html(`<h2><strong>404</strong> Good job! You've broken the internet.</h2>`)

  }
}

window.onhashchange = router
window.onload = router
