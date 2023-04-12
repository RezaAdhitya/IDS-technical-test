const express = require('express')
const cors = require('cors');
const router = require('./routes');
const app = express()
const port = 3000

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// router
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})