import express from 'express'
import mysql from 'mysql'
import session from 'express-session'
// import MySQLStore from 'express-mysql-session'
import { promisify } from 'util'
// rest apis
import apiRegister from './api-register.js'

const server = express()
const port = 3000

// Express now includes a built-in JSON body parser
server.use(express.json())

// Configure Express to use sessions with express-mysql-session
server.use(session({
  secret: 'keyboard_cat',
  resave: false,
  saveUninitialized: false,
  // store: sessionStore
}))

// Configure MySQL connection
const db = mysql.createConnection({
  host: '161.97.144.27',
  port: '8008',
  user: 'root',
  password: 'skairyprairy',
  database: 'page_turner'
})

// Promisify the query method
db.query = promisify(db.query).bind(db);

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err)
    return
  }
  console.log('Connected to MySQL database')
  
  // // Configure session store with express-mysql-session
  // const sessionStore = new MySQLStore({
  //   expiration: 86400000, // Session expiration time in milliseconds (1 day)
  //   createDatabaseTable: true,
  //   schema: {
  //     tableName: 'sessions'
  //   }
  // }, db)

  // connect to API:s
  apiRegister(server, db)

  // Start the server
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  })

})
