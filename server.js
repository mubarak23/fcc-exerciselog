const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var Username = require("./model/user");
var ExerciseLog = require("./model/exerciselog");

const cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect('mongodb://root:root123@ds251240.mlab.com:51240/nodehome',
  { useNewUrlParser: true}, function(err){
      if(err){
        console.log(err);
      }else{
        console.log("Coneected to the DB");
      }

  } )

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


// Not found middleware
app.use((req, res, next) => {
  return next({status: 404, message: 'not found'})
})

// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
});


app.post("/api/exercise/new-user", function(req, res){
      var user = New Username();
      user.username = req.body.username;
      user.save(function(err){
          if(err){
              console.log(err);
          }else{
            res.json(user);
          }
      });
})




const listener = app.listen(3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
