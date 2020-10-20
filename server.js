const  express = require('express')
const path = require('path')
const port = process.env.PORT || 8080;
const app = express()

app.use(express.static(__dirname ))
console.log(__dirname+ '/dist');




app.listen(port, () => console.log(`Example app listening on port ${port}!`))