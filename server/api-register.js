// add REST API:s
import products from "./apis/products.js"


export default function(server, db){
  // connect rest api:s
  products(server, db)
  

}