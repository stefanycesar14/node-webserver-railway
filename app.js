const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();



const port =process.env.PORT;
app.set('view engine', 'hbs');
app.use(express.static('public'))


app.get('/',(req,res)=>{
   res.render('home',{title:'I love Esteban',
name:'I will love you forever5'})
})
app.get('/generic',(req,res)=>{
    res.sendFile(__dirname +'/public/generic.html')
})
app.get('/elements',(req,res)=>{
    res.sendFile(__dirname +'/public/elements.html')
})
app.get('*',(req,res)=>{
    res.sendFile(__dirname +'/public/404.html')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })