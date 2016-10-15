var express = require('express')
var app = express()

app.use(express.static('client'))
// app.set('client',path.join(__dirname,'client'))

app.get ('/', function (req,res){
  res.send('index.html')
})

app.listen(3000,function(){
  console.log('Experimenting with Material Design on Port 3000')
})
