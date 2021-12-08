const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.resolve(__dirname, '..', '..', '.env')
})

console.log(process.env.MONGO_URL)

mongoose
  .connect(process.env.MONGO_URL)
  .then((connection) => {
    console.log('connect to database')
  })
  .catch((err) => {
    console.log(err)
  })

