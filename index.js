//console.log('Hello World');
require('dotenv').config()
const express = require('express')
//import express from "express"
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube', (req, res) => {
    res.send('Hello World!')
    
})
app.get('/twitter', (req,res) =>{
    res.send("Hey there this is Swapnanil")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})