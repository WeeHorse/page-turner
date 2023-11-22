export default function(server, db){

  // Products REST-API methods

  server.get('/products', async (req, res) => {
    // Retrieve products from the database
    const products = await db.query("SELECT * FROM products")
    res.json(products)
  })

  server.post('/products', async (req, res) => {
    // Create a new product in the database (if I am admin)
    if(req.session.users.admin){      
      const result = await db.query("INSERT INTO products (name, price, image, description) VALUES (?, ?, ?, ?)", [req.body.name, req.body.price, req.body.image, req.body.description])
      res.json(result)
    }else{
      res.status(403)
      res.json({access: false})
    }
  })

  server.put('/products/:id', (req, res) => {
    // Update an existing product in the database
  })

  server.delete('/products/:id', (req, res) => {
    // Delete an existing product from the database
  })

}