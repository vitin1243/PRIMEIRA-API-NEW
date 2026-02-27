const express = require('express')

const app = express()

    app.get('/', (req, res) =>{
        res.send("div>colar</div")
    })

app.listen(3000,() => {
    console.log("o servidor esta rodando na porta 3000")
})