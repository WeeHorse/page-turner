// add REST API:s
import login from "./apis/login.js"
import users from "./apis/users.js"
import products from "./apis/products.js"
import cartItems from "./apis/cart-items.js"

export default function(server, db){
  // connect rest api:s
  login(server, db)
  users(server, db)
  products(server, db)
  cartItems(server, db)

}