const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

// GET Request
app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("Get request.")
})

// POST Request
app.post('/', (req, res) => {
    res.send('Hello World!')
    console.log("Post request.")
})

// GET Request 
app.put('/', (req, res) => {
    res.send('Hello World!')
    console.log("put request.")
})

// //   Another Way - Chaining

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//     console.log("Get request.")
// }).app.post('/', (req, res) => {
//     res.send('Hello World!')
//     console.log("Post request.")
// }).app.get('/', (req, res) => {
//     res.send('Hello World!')
//     console.log("Get request.")
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})