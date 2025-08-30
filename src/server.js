import express from 'express'

const app = express()

const hostname = 'localhost'

const port = 8080

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.listen(port, hostname, () => {
  console.log(`hello Nguyen Minh Hieu, I'am running server at http://${hostname}:${port}/`)
})