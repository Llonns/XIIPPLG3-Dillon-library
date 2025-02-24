const express = require('express')
const app = express()
const bookrouter = require('./router/bookrouter')
const kategorirouter = require('./router/categories')
const usersrouter = require('./router/userRoutes')




const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // fungsinya untuk aplikasi kita dapat membaca inputan dari home

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(bookrouter)
app.use(kategorirouter)
app.use(usersrouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})