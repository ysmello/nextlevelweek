import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json(['Yuri', 'Claudio'])
})

app.listen(8080)