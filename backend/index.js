const connectToMongo = require('./db.js')
const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
  console.log(`devARcoder your server started at http://localhost:${port}`)
})
connectToMongo()
