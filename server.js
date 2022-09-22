/* == External Modules == */
const express = require('express')
const cors = require('cors')
require('dotenv').config()
// whitelist & corsOptions
const whitelist = ['http://localhost:3000', '*']
const corsOptions = {
  origin: function (origin, callback) {
    // if (whitelist.indexOf(origin) !== -1) {
    //   callback(null, true)
    // } else {
    //   callback(new Error('Not allowed by CORS'))
    // }
    callback(null, true)
  }
}

/* == Internal Modules == */
const routes = require('./routes')

/* == Express Instance == */
const app = express()

/* == Port == */
const PORT = process.env.PORT || 3003;

/* == DB connection == */
require('./config/db.connection')


/* == Middleware == */
app.use(cors(corsOptions))  // all routes are now exposed, sometimes you just want to limit access (ie OMDB - it's ok for anyone to see the movies, but you don't want just anyone updating the movies)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* == Routes == */
app.use("/recipes", routes.recipes)

app.listen(PORT, () => {
  console.log('🍽', 'Time to cook on port', PORT, '🍴',)
})