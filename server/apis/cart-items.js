export default function(server, db){

  // Cart-items REST-API methods

  server.get('/api/cart-items', async (req, res) => {
    // Retrieve users cart-items from the database, from the view cart_products
    if(req.session.user){    
      const products = await db.query("SELECT * FROM cart_products WHERE user = ?", req.session.user.id)
      res.json(products)
    }else{
      res.status(401)
      res.json({loggedIn: false})
    }
  })

  server.post('/api/cart-items', async (req, res) => {
    // Add a new cart-item in the database (if I am logged in)
    if(req.session.user){  
      try{    
        const result = await db.query("INSERT INTO cart_items (product, user, amount) VALUES (?, ?, ?)", [req.body.product, req.session.user.id, req.body.amount])
        res.json(result)  
      }catch(e){
        res.status(500)
        res.json(e)  
      }
    }else{
      res.status(401)
      res.json({loggedIn: false})
    }
  })

  server.put('/api/cart-items/:id', (req, res) => {
    // Update an existing cart-item in the database (add to amount)
  })

  server.delete('/api/cart-items/:id', (req, res) => {
    // Delete an existing cart-item from the database
  })

}