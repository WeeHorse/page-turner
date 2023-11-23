// add REST API:s
import products from "./apis/products.js"
import login from "./apis/login.js"
import cartItems from "./apis/cart-items.js"


export default function(server, db){
  // connect rest api:s to web server and database
  products(server, db)
  login(server, db)
  cartItems(server, db)
  

}