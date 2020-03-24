const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Start server at port 3000.')
})
// app.listen(3000, () => {
//   console.log('Start server at port 3000.')

// })
