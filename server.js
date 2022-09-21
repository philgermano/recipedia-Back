/* == External Modules == */
const express = require('express')
const cors = require('cors')
// whitelist & corsOptions
const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
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
app.use("/holidays", routes.recepedia)

app.listen(PORT, () => {
  console.log('🍽', 'Time to cook on port', PORT, '🍴',)
})