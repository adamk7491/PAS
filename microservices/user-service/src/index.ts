import 'reflect-metadata' // Import this first
import 'dotenv/config'
import { createConnection } from 'typeorm'
import express from 'express'
import { User } from './entity/User' // Import your User entity
import config from '../config'
import { getConnectionManager } from 'typeorm'

const app = express()
const PORT = 3000 // You can choose any port

// Connect to the database
createConnection({
  type: 'postgres',
  host: config.dbHost,
  port: config.dbPort,
  username: config.dbUsername,
  password: config.dbPassword,
  database: config.dbName,
  // ... other TypeORM settings ...
})
  .then(async (connection) => {
    // Middlewares
    app.use(express.json())

    // Routes
    app.get('/', (req, res) => {
      res.send('User Service Running')
    })

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`)
    })
  })
  .catch((error) => console.log(error))
