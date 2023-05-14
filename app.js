const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from the server!'
    })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=> {
    console.log(`app listening on port ${PORT}`);
})