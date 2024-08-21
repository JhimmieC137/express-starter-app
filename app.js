const express = require('express')
const app = express()
const port = process.env.PORT??5000


app.get('/', (req, res) => {
    res.json({
        message: "Sup nigga!!"
    })
})

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})