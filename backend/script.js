const express = require('express')
const mongoose=require('mongoose')
const app = express()
const userModel = require("./user");
const EmployeeModel=require("./models/Employee")
const cors=require('cors')
app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/practice");

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/profile', function (req, res) {
  res.send('Hello World profile')
});
app.post("/login",(req,res)=>{
  const {email,password}=req.body
  EmployeeModel.findOne({email:email})
  .then(user=>{
    if(user){
      if(user.password===password){
        res.json("Success")
      }else
      {
        res.json("Incorrect Password")
      }
    }
    else
    {
      res.json("Email is Not Registered")
    }
  })
})

app.post('/register',(req,res)=>{
  EmployeeModel.create(req.body)
  .then(Employee=>res.json(Employee)) 
  .catch(err=>res.json(err))
})





app.get('/create', async function (req, res) {
  let create = userModel.create({
    username: "Shyam",
    age: 23,
    name: "Mohan",

  });
  res.send(create)
})

app.get('/alluser', async function (req, res) {
  let User = await EmployeeModel.find();
  res.send(User);
})

app.get('/search', async function (req, res) {
  try {
    let users = await EmployeeModel.findOne({ name: req.query.name });
    res.send(users);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.get('/delete', async function (req, res) {
  let user = await userModel.findOneAndDelete({ name: "Sundar" })
  res.send(user);
})

app.listen(5000)