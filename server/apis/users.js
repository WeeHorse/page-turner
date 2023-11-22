export default function(server, db){

  // User REST-API methods

  server.get('/users', async (req, res) => {
    // Retrieve users from the database (if I have admin privileges)
    if(req.session.user?.admin){
      const users = await db.query("SELECT * FROM users")
      res.json(users)
    }else{
      res.status(403)
      res.json({access: false})
    }
  })

  server.post('/users', async (req, res) => {
    // Create a new user in the database (register user)
    const result = await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [req.body.email, req.body.password])
    res.json(result)
  })

  server.put('/users/:id', (req, res) => {
    // Update an existing user in the database (me)
  })

  server.delete('/users/:id', (req, res) => {
    // Delete an existing user from the database (me)
  })

}