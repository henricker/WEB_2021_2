const express = require('express')
const routes = require('./routes')
const cors = require('cors')

class App {
  express

  constructor() {
    this.express = express()
  }

  routes() {
    this.express.use(routes)
    return this
  }

  middlewares() {
    const corsOptions = {
      origin: '*',
    }
    this.express.use(express.json())
    this.express.use(cors(corsOptions))
    return this
  }
}

module.exports = new App().middlewares().routes().express