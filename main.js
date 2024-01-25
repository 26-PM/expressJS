const express = require('express')
const blog = require('./routes/blog.js')

const app = express()
const port = 3000

// Use of public folder
// built in
app.use(express.static("public"))

// Middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

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

// Using router
app.use('/blog', blog)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})