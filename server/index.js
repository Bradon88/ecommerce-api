const express = require('express')
const products = require('../products.json')
const getProduct = require('./getProduct')

const app = express()

app.use(express.json())

const port = 4040

app.listen(port, () => console.log(`Server is running on port ${port}`))


app.get('/api/products', (req, res) => {
    res.status(200).send(products)
})

app.get('/api/products/:id, getProduct')