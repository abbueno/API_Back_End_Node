const express = require('express')

const app = express()

app.listen('3000')


let author = "Allan Bueno"

//middleware
app.use(express.json())

app.route('/').post((req, res)=>res.send(req.body))



app.route('/').get( (req,res) => res.send(author))

app.route('/').put((req, res)=>{
    author = req.body.author
    res.send(author)
})


// Rqeuisição DELETE
app.route('/:identificador').delete( (req,res) => {
    res.send(req.params.identificador)})


app.route('/').get( (req,res) => res.send(req.query.name))
app.route('/').put( (req,res) => res.send(req.query.author))
app.route('/').get( (req,res) => res.send(req.params.parametro))

app.route('/').get( (req,res) => res.send("Olá"))



// Pagando dados do github
app.route('/').post((req, res)=>res.send("hello"))